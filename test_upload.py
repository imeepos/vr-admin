#!/usr/bin/env python3

import requests
import json
import os

# GraphQL 端点
GRAPHQL_URL = "http://localhost:3002/graphql"

# 测试 GraphQL 上传查询
operations = {
    "query": """
    mutation UploadImage($file: Upload!) {
      uploadImage(file: $file) {
        success
        file {
          id
          filename
          originalName
          mimetype
          size
          url
          path
        }
      }
    }
    """,
    "variables": {
        "file": {
            "path": "./test_image.txt",
            "relativePath": "./test_image.txt"
        }
    }
}

map = {
    "0": ["variables.file"]
}

# 创建测试文件
test_content = "This is a test file for upload testing"
with open("test_image.txt", "w") as f:
    f.write(test_content)

print("✓ Test file created")

# 发送 multipart/form-data 请求
try:
    with open("test_image.txt", "rb") as f:
        files = {
            'operations': (None, json.dumps(operations), 'application/json'),
            'map': (None, json.dumps(map), 'application/json'),
            '0': ('test_image.txt', f, 'text/plain')
        }

        print("📤 Uploading file...")
        response = requests.post(GRAPHQL_URL, files=files, timeout=30)

        if response.status_code == 200:
            result = response.json()
            if result.get('data', {}).get('uploadImage', {}).get('success'):
                print("✅ Upload successful!")
                print("📁 File info:", json.dumps(result['data']['uploadImage']['file'], indent=2))
            else:
                print("❌ Upload failed:")
                print("Response:", json.dumps(result, indent=2))
        else:
            print(f"❌ HTTP Error: {response.status_code}")
            print("Response:", response.text)

except Exception as e:
    print(f"❌ Upload error: {e}")

finally:
    # 清理测试文件
    if os.path.exists("test_image.txt"):
        os.remove("test_image.txt")
        print("🧹 Test file cleaned up")