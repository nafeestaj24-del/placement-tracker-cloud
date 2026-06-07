Student Placement Tracker (Full-Stack AWS Cloud Application)

A decoupled full-stack tracking application designed to streamline and monitor student corporate assessment workflows and application statuses.

 🏗️ Architecture Overview
* Frontend: Static HTML/CSS/JavaScript web interface container deployed via **Amazon S3 Static Website Hosting**.
* Backend: Lightweight REST API engine built with **Node.js and Express** running on a remote **Amazon Linux EC2 Instance**.
* Security: Configured fine-grained **AWS Security Groups** with custom inbound firewall pathways to handle cross-origin traffic securely over port 3000.

 🚀 Key Features
* Decoupled Architecture: Frontend and backend are completely independent, communicating securely across the AWS network.
* Real-time Data Parsing: Captures corporate data (Company Name, Interview Status, Preparation Notes) and transmits via cross-origin JSON payloads.
* Cloud Security Optimized: Uses strict inbound/outbound rules to protect the backend infrastructure.
