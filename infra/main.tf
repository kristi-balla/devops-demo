provider "aws" {
  region = "us-west-2"
}

# Create a basic S3 bucket
resource "aws_s3_bucket" "insecure_bucket" {
  bucket = "my-very-insecure-bucket-demo"
  force_destroy = true
}

# Remove all public access blocks (insecure)
resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket = aws_s3_bucket.insecure_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Add public read ACL (insecure)
resource "aws_s3_bucket_acl" "public_acl" {
  bucket = aws_s3_bucket.insecure_bucket.id
  acl    = "public-read"
  depends_on = [aws_s3_bucket_public_access_block.public_access]
}

# Add a permissive bucket policy (insecure)
resource "aws_s3_bucket_policy" "allow_public_read" {
  bucket = aws_s3_bucket.insecure_bucket.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = ["s3:GetObject"]
        Resource  = [
          "${aws_s3_bucket.insecure_bucket.arn}/*"
        ]
      }
    ]
  })
  depends_on = [aws_s3_bucket_public_access_block.public_access]
}

# Configure the bucket to use as Terraform backend (insecure)
terraform {
    required_version = ">= 1.12"
}
