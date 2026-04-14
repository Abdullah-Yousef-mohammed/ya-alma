package com.yaalma.api.services;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class S3Service {

    private AmazonS3 s3client;

    @Value("${aws.s3.bucketName:ya-alma-media-bucket}")
    private String bucketName;

    @Value("${aws.accessKeyId:placeholder-access-key}")
    private String accessKey;

    @Value("${aws.secretKey:placeholder-secret-key}")
    private String secretKey;

    @Value("${aws.region:ap-southeast-1}") // Defaulting to Malaysia region
    private String region;

    @PostConstruct
    private void initializeAmazon() {
        AWSCredentials credentials = new BasicAWSCredentials(accessKey, secretKey);
        this.s3client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(region)
                .build();
    }

    public String uploadFile(MultipartFile file, String uniqueFileName) throws IOException {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(file.getSize());
        metadata.setContentType(file.getContentType());
        
        s3client.putObject(new PutObjectRequest(bucketName, uniqueFileName, file.getInputStream(), metadata)
                .withCannedAcl(CannedAccessControlList.PublicRead));
                
        return s3client.getUrl(bucketName, uniqueFileName).toExternalForm();
    }
}
