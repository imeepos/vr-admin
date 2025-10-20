package com.sams.admin.user.starter;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import org.apache.commons.lang3.StringUtils;

import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
import java.util.Iterator;
import java.util.Set;

/**
 * RSA签名及验签测试
 */

public class RSASignTests {


    public static void main(String[] args) throws Exception {
        String privateKeyBase64 = "MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBALuMEhKXPN2566gnPlpjNM++kYLj2KylBZmg61RiHZTEkolfgMTsAzvEcf5p2wDgVE83dzcW3eeWkGJrxifUhxVx5DHiUbRrfCoNg1kCNsCG/LYMacM4UWnbJb2xSCMEFws+/Mhn9Ti+Dvb7suhl++xQBFr9RDt7cKUwxEl2NSmtAgMBAAECgYBIWXa3WUSPvKNeURVKxS6gXcHAnqj9oQOSCnP+L4N92n81I3SHgwyUR+o53RgxNFkR3jHNPLMKHhlA/paI0wHw6BhLtF8wGOtp4AiJoEjJFC0qOiOJCeyr7OZh7EXOwbBVwJ5QkWYSRaAeJXdDhKcrAz9TgOajOuvXp/uq36GXAQJBAPDXJx3Ba3gRJgfqj7GP0SiGUz8dxhFhQ4UPDsNnVtDXCC6uARibq1iyBUDlNeWjV2uPdqC3L9H8SoBqY5ySuo0CQQDHWil7kWTgbVD7wBkePeWJiPkI+wgNi6m7lhkKb3//qIQEGGlOG6WJ9CUNJv8nhAZMBQj5W30YbBX08za4wvOhAkA3tg1eXLe3doANpLzInjQL48at+v0uWAl+ZhVMLkNu288QvT+Tqa7hPYzpjhwBmt9GClGuq7FsKagyPGn+dhKhAkB2KOXfnR06vPC8V29L8ookDDD39rseNEMFsgDjo5UttveQ6ds49cAX1cNEWXHxPRryYiWgj27FVANrreEogD0hAkALvYfF6HqrodSKf6iUqXFxwvDs2vPZcVzvgH7MBPPhRFZmFOsPwOsvw62HgVA3aCHxINsppv2Kko3i3TmSFzuZ";
        String publicKeyBase64 = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7jBISlzzdueuoJz5aYzTPvpGC49ispQWZoOtUYh2UxJKJX4DE7AM7xHH+adsA4FRPN3c3Ft3nlpBia8Yn1IcVceQx4lG0a3wqDYNZAjbAhvy2DGnDOFFp2yW9sUgjBBcLPvzIZ/U4vg72+7LoZfvsUARa/UQ7e3ClMMRJdjUprQIDAQAB";
        String appName = "sams-yunmall";
        long timestamp = System.currentTimeMillis();
        String uid = "032423423";
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("uid", uid);
        jsonObject.put("timestamp", timestamp);
        String sign = signWithRSA(jsonObject, appName, timestamp, privateKeyBase64);
        System.out.println(sign);
        // 1. 解码公钥和签名
        byte[] publicKeyBytes = Base64.getDecoder().decode(publicKeyBase64);
        byte[] signatureBytes = Base64.getUrlDecoder().decode(sign);

        // 2. 加载公钥
        X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeyBytes);
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        PublicKey publicKey = keyFactory.generatePublic(keySpec);

        // 3. 原始数据（需与签名时一致）
        String regionJsonStr = JSONObject.toJSONString(jsonObject);
        String jsonStr = getMapSortFieldJson(regionJsonStr);
        StringBuilder messageSb = new StringBuilder();
        messageSb.append(jsonStr).append(appName).append(timestamp);
        String message = messageSb.toString();
        byte[] data = message.getBytes();

        // 4. 验证签名
        Signature verifySig = Signature.getInstance("SHA256withRSA");
        verifySig.initVerify(publicKey);
        verifySig.update(data);
        boolean isValid = verifySig.verify(signatureBytes);

        System.out.println("验签结果: " + isValid); // 输出 true 或 false
    }


    /**
     * JSON字符串排序
     * @param json 原JSON字符串
     * @return 排序后的JSON字符串
     */
    public static String getMapSortFieldJson(String json) {
        if (StringUtils.isEmpty(json)) {
            return json;
        }
        Object object = JSONObject.parse(json);
        if (null != object && object instanceof JSONObject) {
            JSONObject jsonObject = JSONObject.parseObject(json);
            json = getMapSortObjectJson(jsonObject);
        }
        if (null != object && object instanceof JSONArray) {
            JSONArray jsonArray = JSONArray.parseArray(json);
            json = getMapSortArrayJson(jsonArray);
        }
        return json;
    }


    /**
     * JSONArray转换为排序后的字符串
     * @param jsonArray  * @return
     *                   
     */
    private static String getMapSortArrayJson(JSONArray jsonArray) {
        JSONArray resultArray = new JSONArray();
        for (int index = 0; index < jsonArray.size(); index++) {
            //3、把里面的对象转化为JSONObject
            String value = jsonArray.getString(index);
            if (JSONObject.isValidObject(value) || JSONObject.isValidArray(value)) {
                resultArray.add(JSONObject.parse(getMapSortFieldJson(value)));
                continue;
            }
            if (JSONObject.isValid(value)) {
                resultArray.add(jsonArray.get(index));
                continue;
            }
            resultArray.add(value);
        }
        return JSONArray.toJSONString(resultArray, SerializerFeature.MapSortField);
    }


    /**
     * JSONObject转换为排序后的字符串
     * @param jsonObject  * @return
     *                    
     */
    private static String getMapSortObjectJson(JSONObject jsonObject) {
        if (null == jsonObject) {
            return "";
        }
        Set<String> keySet = jsonObject.keySet();
        Iterator<String> keys = keySet.iterator();
        while (keys.hasNext()) {
            String key = keys.next();
            String value = jsonObject.getString(key);
            //如果不是JSONArray或JSONObject，则跳过
            if (!JSONObject.isValid(value)) {
                continue;
            }
            Object object = parseIfValid(value);
            if (null != object && object instanceof JSONObject) {
                JSONObject valueJsonObject = JSONObject.parseObject(value);
                String jsonValue = getMapSortObjectJson(valueJsonObject);
                jsonObject.fluentPut(key, JSONObject.parseObject(jsonValue));
            }
            if (null != object && object instanceof JSONArray) {
                JSONArray jsonArray = JSONArray.parseArray(value);
                String jsonValue = getMapSortArrayJson(jsonArray);
                jsonObject.fluentPut(key, JSONArray.parseArray(jsonValue));
            }
        }
        return JSONObject.toJSONString(jsonObject, SerializerFeature.MapSortField);
    }

    /**
     * 解析是否合法json格式, 解决[位置]parse失败问题
     * @param value
     * @return
     */
    private static Object parseIfValid(String value) {
        try {
            Object object = JSONObject.parse(value);
            return object;
        } catch (Exception e) {
            return null;
        }
    }

    public static <T> String signWithRSA(T param, String appName, long timestamp, String privateKey) throws Exception {
        //json 排序
        String regionJsonStr = JSONObject.toJSONString(param);
        String jsonStr = getMapSortFieldJson(regionJsonStr);
        StringBuilder data = new StringBuilder();
        data.append(jsonStr).append(appName).append(timestamp);
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(getPrvKey(privateKey));
        signature.update(data.toString().getBytes());
        byte[] signatureBytes = signature.sign();
        // 输出签名结果（Base64编码）
        String signatureBase64 = Base64.getUrlEncoder().encodeToString(signatureBytes);
        return signatureBase64;
    }

    /**
     * 获取私钥
     *
     * @param privateKey 私钥字符串
     * @return
     */
    public static PrivateKey getPrvKey(String privateKey) throws Exception {
        KeyFactory keyFactory = KeyFactory.getInstance("RSA");
        byte[] decodedKey = Base64.getDecoder().decode(privateKey);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(decodedKey);
        return keyFactory.generatePrivate(keySpec);
    }
}


