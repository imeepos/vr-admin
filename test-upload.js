#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const fetch = require('node-fetch');

// 创建一个测试图片文件
const testImagePath = path.join(__dirname, 'test-upload.webp');
const testImageContent = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');

try {
  fs.writeFileSync(testImagePath, testImageContent);
  console.log('✓ Test image created');
} catch (error) {
  console.error('✗ Failed to create test image:', error.message);
  process.exit(1);
}

// GraphQL 上传查询
const operations = {
  query: `
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
  `,
  variables: {
    file: {
      path: "./test-upload.webp",
      relativePath: "./test-upload.webp"
    }
  }
};

const map = {
  "0": ["variables.file"]
};

// 创建 FormData
const form = new FormData();
form.append('operations', JSON.stringify(operations));
form.append('map', JSON.stringify(map));
form.append('0', fs.createReadStream(testImagePath), {
  filename: 'test-upload.webp',
  contentType: 'image/webp'
});

// 发送请求
const uploadFile = async () => {
  try {
    console.log('📤 Uploading file...');

    const response = await fetch('http://localhost:3002/graphql', {
      method: 'POST',
      body: form,
      headers: form.getHeaders()
    });

    const result = await response.json();

    if (response.ok && result.data?.uploadImage?.success) {
      console.log('✅ Upload successful!');
      console.log('📁 File info:', JSON.stringify(result.data.uploadImage.file, null, 2));
    } else {
      console.error('❌ Upload failed:');
      console.error('Status:', response.status);
      console.error('Response:', JSON.stringify(result, null, 2));
    }
  } catch (error) {
    console.error('❌ Upload error:', error.message);
  } finally {
    // 清理测试文件
    try {
      fs.unlinkSync(testImagePath);
      console.log('🧹 Test file cleaned up');
    } catch (error) {
      console.error('⚠️  Failed to clean up test file:', error.message);
    }
  }
};

uploadFile();