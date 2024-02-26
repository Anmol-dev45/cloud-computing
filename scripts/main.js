const topics = [
  {
    title: "Introduction to Cloud Computing",
    content: `<article>
    <h1 class="title">Introduction to Cloud Computing</h1>
    <p class="body-text">
      Cloud computing is a revolutionary technology that has transformed the way we store, process, and manage data. In this section, we will explore the basics of cloud computing, its key components, and why it has become a pivotal element in modern computing.
    </p>
    <h2 class="heading">What is Cloud Computing?</h2>
    <p class="body-text">
      Simply put, cloud computing is the delivery of various services over the Internet. These resources include tools and applications like data storage, servers, databases, networking, and software. Instead of keeping files on a proprietary hard drive or local storage device, cloud-based storage makes it possible to save them to a remote database. As long as an electronic device has access to the web, it has access to the data and the software programs to run it.
    </p>
    <div class="divider"></div>
    <h2 class="heading">Key Characteristics</h2>
    <p class="body-text">
      Cloud computing is characterized by several key features that distinguish it from traditional hosting:
    </p>
    <ul class="body-text">
      <li>
        <strong>On-demand self-service:</strong> Users can provision resources as needed, without requiring human interaction with each service provider.
      </li>
      <li>
        <strong>Broad network access:</strong> Resources are available over the network and accessed through standard platforms (mobile phones, tablets, laptops, and workstations).
      </li>
      <li>
        <strong>Resource pooling:</strong> A provider’s computing resources are pooled to serve multiple consumers, with different physical and virtual resources dynamically assigned and reassigned according to demand.
      </li>
      <li>
        <strong>Rapid elasticity:</strong> Capabilities can be elastically provisioned and released to scale rapidly outward and inward commensurate with demand.
      </li>
      <li>
        <strong>Measured service:</strong> Cloud systems automatically control and optimize resource use by leveraging a metering capability at some level of abstraction appropriate to the type of service (storage, processing, bandwidth, and active user accounts).
      </li>
    </ul>
    <div class="divider"></div>
    <h2 class="heading">Benefits of Cloud Computing</h2>
    <p class="body-text">
      The adoption of cloud computing has numerous advantages. Some of these include cost savings, enhanced performance, rapid scalability, flexibility, and effective resource allocation.
    </p>
    <!-- You can continue with more sub-sections or concluding remarks -->
  </article>
  `,
  },
  {
    title: "Cloud Service Models",
    content: `<article>
    <h1 class="title">Cloud Service Models</h1>
    <p class="body-text">
      Cloud computing offers different levels of control, flexibility, and management so that users can select the right services for their needs. In this section, we will explore the three primary service models: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS).
    </p>
    
    <h2 class="heading">Infrastructure as a Service (IaaS)</h2>
    <p class="body-text">
      IaaS is the most flexible cloud computing model and provides hardware, storage, servers, and data center space or network components; it may also include software.
    </p>
    <ul class="body-text">
      <li><strong>Key Features:</strong> Virtual server space, network connections, bandwidth, IP addresses and load balancers.</li>
      <li><strong>Common Uses:</strong> IaaS is beneficial for small companies or startups that need to quickly scale up or down, depending on demand.</li>
      <li><strong>Examples:</strong> Amazon Web Services (AWS), Microsoft Azure, Google Compute Engine (GCE).</li>
    </ul>
    
    <div class="divider"></div>
    
    <h2 class="heading">Platform as a Service (PaaS)</h2>
    <p class="body-text">
      PaaS provides a framework for developers that they can build upon and use to create customized applications. All servers, storage, and networking can be managed by the enterprise or a third-party provider while the developers can maintain management of the applications.
    </p>
    <ul class="body-text">
      <li><strong>Key Features:</strong> Development tools, operating systems, database management, business analytics.</li>
      <li><strong>Common Uses:</strong> PaaS is used for general software development and is particularly useful in situations where multiple developers will be working on a project or where other external parties need to interact with the development process.</li>
      <li><strong>Examples:</strong> Google App Engine, Apache Stratos, OpenShift.</li>
    </ul>
    
    <div class="divider"></div>
    
    <h2 class="heading">Software as a Service (SaaS)</h2>
    <p class="body-text">
      SaaS utilizes the internet to deliver applications to its users, which are managed by a third-party. Unlike IaaS and PaaS, SaaS is completely managed by third-party vendors.
    </p>
    <ul class="body-text">
      <li><strong>Key Features:</strong> Web access to commercial software, software is managed from a central location, software delivered in a "one to many" model.</li>
      <li><strong>Common Uses:</strong> SaaS is widely used by companies for the delivery of applications across the internet as a service. It eliminates the need for installing and running the application on individual computers.</li>
      <li><strong>Examples:</strong> Google Workspace, Salesforce, Dropbox, MailChimp.</li>
    </ul>
    
    <!-- Additional sub-sections or concluding remarks can be added here -->
    </article>
    `,
  },
  {
    title: "Cloud Deployment Models",
    content: `<article>
    <h1 class="title">Cloud Deployment Models</h1>
    <p class="body-text">
      Cloud deployment models represent different ways to organize cloud infrastructure based on who controls the resources and who can access them. Understanding these models is crucial for implementing the most appropriate cloud solution for your needs. We will explore four primary deployment models: Public Cloud, Private Cloud, Hybrid Cloud, and Community Cloud.
    </p>
    
    <h2 class="heading">Public Cloud</h2>
    <p class="body-text">
      Public clouds are owned and operated by third-party cloud service providers, who deliver their computing resources like servers and storage over the Internet. Microsoft Azure is an example of a public cloud. With a public cloud, all hardware, software, and other supporting infrastructure is owned and managed by the cloud provider. You access these services and manage your account using a web browser.
    </p>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211123123729/Group4-660x330.jpg" alt="Public Cloud Illustration" class="cloud-image">
    
    <div class="divider"></div>
    
    <h2 class="heading">Private Cloud</h2>
    <p class="body-text">
      A private cloud refers to cloud computing resources used exclusively by a single business or organization. A private cloud can be physically located on the company’s on-site datacenter. Some companies also pay third-party service providers to host their private cloud. A private cloud is one where the services and infrastructure are maintained on a private network.
    </p>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211123123851/Group1-660x330.jpg" alt="Private Cloud Illustration" class="cloud-image">
    
    <div class="divider"></div>
    
    <h2 class="heading">Hybrid Cloud</h2>
    <p class="body-text">
      Hybrid clouds combine public and private clouds, bound together by technology that allows data and applications to be shared between them. By allowing data and applications to move between private and public clouds, a hybrid cloud gives your business greater flexibility, more deployment options, and helps optimize your existing infrastructure, security, and compliance.
    </p>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211123123930/Group2-660x330.jpg" alt="Hybrid Cloud Illustration" class="cloud-image">
    
    <div class="divider"></div>
    
    <h2 class="heading">Community Cloud</h2>
    <p class="body-text">
      A community cloud in cloud computing is a collaborative effort in which infrastructure is shared between several organizations from a specific community with common concerns (security, compliance, jurisdiction, etc.), whether managed internally or by a third-party and hosted internally or externally. This model is a compromise between the public and private models, offering a customized solution to meet the specific needs of different organizations.
    </p>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20211123124006/Group3-660x330.jpg" alt="Community Cloud Illustration" class="cloud-image">
    
    <!-- Additional detailed subsections can be added here, such as Advantages and Disadvantages, Use Cases, Security Considerations, etc. -->
    
    </article>
    `,
  },
  {
    title: "Core Technologies in Cloud Computing",
    content: `<article>
    <h1 class="title">Core Technologies in Cloud Computing</h1>
    <p class="body-text">
      Cloud computing is built on a range of core technologies, each playing a pivotal role in enabling cloud services to be scalable, flexible, and efficient. Understanding these technologies is key to leveraging the power of cloud computing.
    </p>
    
    <h2 class="heading">Virtualization</h2>
    <p class="body-text">
      Virtualization is the process of creating a virtual version of something, including but not limited to virtual computer hardware platforms, storage devices, and computer network resources. It allows multiple virtual machines, with heterogeneous operating systems, to run in isolation, side-by-side on the same physical machine.
    </p>
    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230324174647/Virtualization.png" alt="Virtualization in Cloud Computing" class="cloud-image">
    
    <h2 class="heading">Containerization</h2>
    <p class="body-text">
      Containerization involves encapsulating an application and its dependencies into a container that can run on any computing environment. This promotes both efficiency and scalability, as containers are lighter than virtual machines and ensure consistent operation across various platforms.
    </p>
    
    <h2 class="heading">Cloud Storage</h2>
    <p class="body-text">
      Cloud storage technology allows data to be stored on remote servers which can be accessed from the internet. This technology is scalable, meaning businesses can pay for the amount of storage they need, while also ensuring that data can be reliably backed up and retrieved.
    </p>
    
    <h2 class="heading">Serverless Computing</h2>
    <p class="body-text">
      Serverless computing is a cloud computing execution model where the cloud provider dynamically manages the allocation of machine resources. This model allows developers to build and run applications and services without thinking about servers.
    </p>
    
    <h2 class="heading">Cloud Networking</h2>
    <p class="body-text">
      Cloud networking involves delivering network services and infrastructure through the cloud. This technology supports connectivity of various cloud services, and it can provide a global reach for applications and data on a massive scale.
    </p>
    
    <!-- Additional detailed subsections can be added here, such as APIs in Cloud Computing, Multi-Cloud Strategies, Cloud Automation, etc. -->
    
    </article>
    `,
  },
  {
    title: "Cloud Security",
    content: `<article>
    <h1 class="title">Cloud Security</h1>
    <p class="body-text">
      Cloud security is a critical component in ensuring the safe and efficient operation of cloud services. It encompasses a set of policies, controls, procedures, and technologies that work together to protect cloud-based systems, data, and infrastructure.
    </p>
    
    <h2 class="heading">Understanding Cloud Security</h2>
    <p class="body-text">
      Security in the cloud is not inherently different from security in any other IT environment. However, the cloud’s unique characteristics create new challenges that need to be addressed. Cloud security is designed to maintain the confidentiality, integrity, and availability of your data and services in the cloud.
    </p>
    
    <div class="divider"></div>
    
    <h2 class="heading">Key Cloud Security Measures</h2>
    <p class="body-text">
      Several security measures are vital in the cloud, including encryption, identity and access management, secure data storage, and regular security audits.
    </p>
    <ul class="body-text">
      <li><strong>Encryption:</strong> Encrypting data at rest and in transit to protect sensitive information.</li>
      <li><strong>Identity and Access Management (IAM):</strong> Controlling who has access to what resources in the cloud.</li>
      <li><strong>Secure Data Storage:</strong> Ensuring that data stored in the cloud is protected from unauthorized access and data breaches.</li>
      <li><strong>Regular Security Audits:</strong> Conducting frequent security assessments to identify and mitigate potential vulnerabilities.</li>
    </ul>
    
    <div class="divider"></div>
    
    <h2 class="heading">Best Practices for Cloud Security</h2>
    <p class="body-text">
      To maintain a robust security posture in the cloud, organizations should adhere to certain best practices, including implementing a strong password policy, regularly updating and patching systems, and educating employees about security risks.
    </p>
    <ul class="body-text">
      <li><strong>Strong Password Policies:</strong> Enforce complex passwords and regular password changes.</li>
      <li><strong>Regular Updates and Patching:</strong> Keep all systems up-to-date to protect against vulnerabilities.</li>
      <li><strong>Security Awareness:</strong> Train employees on recognizing and avoiding security threats.</li>
    </ul>
    
    <!-- Additional subsections can be added here, such as specific security challenges in cloud computing, case studies of cloud security, future trends in cloud security, etc. -->
    
    </article>
    `,
  },
  {
    title: "Cloud Computing Applications",
    content: `<article>
    <h1 class="title">Cloud Computing Applications</h1>
    <p class="body-text">
      Cloud computing applications have revolutionized the way businesses operate and individuals access services. From streamlining processes to enhancing collaboration, the versatility of cloud computing is evident in various domains.
    </p>
    
    <h2 class="heading">Collaborative Tools and Productivity Suites</h2>
    <p class="body-text">
      Cloud-based collaborative tools and productivity suites enable teams to work seamlessly across different locations. Applications like Google Workspace and Microsoft 365 provide document collaboration, video conferencing, and project management tools, fostering efficient teamwork.
    </p>
    
    <h2 class="heading">Customer Relationship Management (CRM)</h2>
    <p class="body-text">
      CRM systems hosted in the cloud offer businesses a centralized platform to manage customer interactions, sales, and service-related processes. Cloud-based CRMs, such as Salesforce, streamline customer communication and data management.
    </p>
    
    <h2 class="heading">Data Analytics and Business Intelligence</h2>
    <p class="body-text">
      Cloud computing facilitates powerful data analytics and business intelligence applications. Platforms like Amazon Redshift and Google BigQuery allow organizations to process massive datasets, derive insights, and make data-driven decisions.
    </p>
    
    <h2 class="heading">E-commerce and Online Retail</h2>
    <p class="body-text">
      E-commerce platforms leverage cloud computing for scalable and secure online retail operations. Cloud services enable efficient order processing, inventory management, and seamless customer experiences, as seen in platforms like Shopify and Magento.
    </p>
    
    <h2 class="heading">Healthcare Information Systems</h2>
    <p class="body-text">
      Cloud computing plays a crucial role in healthcare by supporting electronic health records (EHRs), telemedicine, and medical research. Cloud applications in healthcare enhance data accessibility, collaboration among healthcare professionals, and patient care.
    </p>
    
    <!-- Additional detailed subsections can be added here, such as Cloud Gaming, Internet of Things (IoT) Applications, Cloud-Based Development Environments, etc. -->
    
    </article>
    `,
  },
  {
    title: "Emerging Trends in Cloud Computing",
    content: `<article>
    <h1 class="title">Emerging Trends in Cloud Computing</h1>
    <p class="body-text">
      Cloud computing continues to evolve, driven by technological innovations and changing business requirements. Emerging trends in the cloud computing landscape shape the future of digital infrastructure, providing new possibilities for businesses and individuals.
    </p>
    
    <h2 class="heading">Edge Computing</h2>
    <p class="body-text">
      Edge computing brings computation and data storage closer to the location where it is needed, reducing latency and improving response times. This trend is especially crucial for applications requiring real-time processing, such as IoT devices and augmented reality.
    </p>
    
    <h2 class="heading">Serverless Architecture</h2>
    <p class="body-text">
      Serverless architecture allows developers to focus on writing code without the need to manage server infrastructure. This trend is gaining popularity for its scalability, cost-effectiveness, and ease of deployment, empowering developers to build applications more efficiently.
    </p>
    
    <h2 class="heading">Multi-Cloud Strategies</h2>
    <p class="body-text">
      Organizations are increasingly adopting multi-cloud strategies to distribute workloads across multiple cloud providers. This approach enhances flexibility, mitigates vendor lock-in, and ensures high availability, providing a tailored solution for diverse business needs.
    </p>
    
    <h2 class="heading">AI and Machine Learning Integration</h2>
    <p class="body-text">
      The integration of artificial intelligence (AI) and machine learning (ML) into cloud services is transforming data analysis, automation, and decision-making processes. Cloud platforms with built-in AI/ML capabilities empower businesses to derive valuable insights from their data.
    </p>
    
    <h2 class="heading">Blockchain in Cloud Computing</h2>
    <p class="body-text">
      The combination of blockchain technology and cloud computing enhances security, transparency, and trust in various applications. This trend is particularly relevant in sectors like finance, supply chain, and healthcare, where secure and traceable transactions are crucial.
    </p>
    
    <!-- Additional detailed subsections can be added here, such as Quantum Computing, Cloud-Native Development, Green Cloud Computing, etc. -->
    
    </article>
    `,
  },
  {
    title: "Challenges and Future of Cloud Computing",
    content: `<article>
    <h1 class="title">Challenges and Future of Cloud Computing</h1>
    <p class="body-text">
      While cloud computing has brought about significant advancements, it also faces challenges that shape its trajectory. Exploring these challenges and anticipating the future of cloud computing provides insights into potential innovations and improvements.
    </p>
    
    <h2 class="heading">Challenges in Cloud Computing</h2>
    <p class="body-text">
      Cloud computing is not without its hurdles. Key challenges include security concerns, data privacy issues, and potential downtime. As businesses rely more on cloud services, addressing these challenges becomes imperative to ensure the robustness of cloud environments.
    </p>
    
    <h2 class="heading">Security and Privacy Concerns</h2>
    <p class="body-text">
      Security remains a top concern in the cloud, with potential threats like data breaches and unauthorized access. Ensuring robust security measures, encryption, and compliance with data protection regulations are critical aspects of addressing these concerns.
    </p>
    
    <h2 class="heading">Data Sovereignty and Compliance</h2>
    <p class="body-text">
      Data sovereignty refers to the legal issues related to the physical location of data. Compliance with different international regulations adds complexity, and businesses must navigate these issues to ensure data is stored and processed in accordance with relevant laws.
    </p>
    
    <h2 class="heading">Downtime and Service Reliability</h2>
    <p class="body-text">
      Service downtime can impact businesses' operations and result in significant losses. Ensuring high availability, redundancy, and effective disaster recovery plans are essential to mitigate the impact of service disruptions.
    </p>
    
    <h2 class="heading">Future of Cloud Computing</h2>
    <p class="body-text">
      The future of cloud computing holds exciting possibilities. Trends like quantum computing, enhanced AI integration, and continued advancements in edge computing are expected to shape the landscape. Cloud-native development and sustainable practices will also play a vital role.
    </p>
    
    <!-- Additional detailed subsections can be added here, such as Green Cloud Computing, Quantum Computing, Cloud-Native Development, etc. -->
    
    </article>
    `,
  },
  {
    title: "Case Studies and Real-World Examples",
    content: `<article>
    <h1 class="title">Case Studies and Real-World Examples of Cloud Computing</h1>
    <p class="body-text">
      Examining real-world case studies of cloud computing provides valuable insights into how this technology is being leveraged across different sectors. These examples highlight the practical applications, benefits, and challenges encountered in diverse environments.
    </p>
    
    <h2 class="heading">Healthcare: Improving Patient Care with Cloud Technology</h2>
    <p class="body-text">
      Cloud computing in healthcare has revolutionized patient data management and telemedicine services. A case study on a healthcare provider illustrates how they utilize cloud-based systems for efficient patient data storage, analysis, and remote consultations.
    </p>
    
    <h2 class="heading">Finance: Secure Cloud Solutions in Banking</h2>
    <p class="body-text">
      The finance sector, particularly banking, has embraced cloud computing for enhanced security and operational efficiency. This case study explores how a major bank implemented cloud solutions to secure data, streamline operations, and provide better customer service.
    </p>
    
    <h2 class="heading">Retail: Cloud-Driven E-Commerce Transformation</h2>
    <p class="body-text">
      E-commerce platforms heavily rely on cloud computing for scalability and customer experience enhancement. A detailed case study on a leading e-commerce company showcases their use of the cloud for handling large-scale transactions, data analytics, and personalized shopping experiences.
    </p>
    
    <h2 class="heading">Education: Cloud Services in Online Learning</h2>
    <p class="body-text">
      The shift to online education has been facilitated by cloud computing, offering scalability and accessibility. This case study focuses on an educational institution that utilizes cloud services for hosting virtual classrooms, storing educational materials, and facilitating collaborative learning.
    </p>
    
    <h2 class="heading">Manufacturing: Leveraging Cloud for Smart Manufacturing</h2>
    <p class="body-text">
      Cloud computing is integral in the evolution of smart manufacturing. This case study demonstrates how a manufacturing company integrates cloud technology for real-time data monitoring, predictive maintenance, and supply chain optimization.
    </p>
    
    <!-- Additional real-world examples can be included from sectors like Government Services, Entertainment, Transportation, etc. -->
    
    </article>
    `,
  },
  {
    title: "Conclusion and Reflections",
    content: `<article>
    <h1 class="title">Conclusion and Reflections</h1>
    <p class="body-text">
      In conclusion, the exploration of cloud computing has revealed its transformative impact on various facets of technology and business. From its fundamental technologies to emerging trends, challenges, and real-world applications, cloud computing stands as a linchpin in the modern digital landscape.
    </p>
    
    <h2 class="heading">Key Takeaways</h2>
    <ul class="body-text">
      <li>The core technologies in cloud computing, including virtualization, containerization, and cloud storage, form the backbone of scalable and efficient cloud services.</li>
      <li>Real-world examples and case studies illustrate how diverse industries leverage cloud computing for enhanced collaboration, data analytics, and operational efficiency.</li>
      <li>Emerging trends like edge computing, serverless architecture, and AI integration showcase the continuous evolution of cloud computing to meet evolving technological demands.</li>
      <li>Challenges such as security concerns and data privacy underscore the importance of robust strategies and continuous innovation in the cloud space.</li>
      <li>The future of cloud computing holds promise with trends like multi-cloud strategies, AI and machine learning integration, and blockchain applications shaping the next phase of technological advancements.</li>
    </ul>
    
    <h2 class="heading">Looking Ahead</h2>
    <p class="body-text">
      As we look ahead, the integration of cloud computing with emerging technologies, the ongoing pursuit of enhanced security measures, and the adoption of sustainable practices in the cloud space will play pivotal roles. Cloud computing's ability to drive innovation, scalability, and efficiency positions it as a cornerstone in the digital transformation journey of businesses and industries globally.
    </p>
    
    <h2 class="heading">Final Thoughts</h2>
    <p class="body-text">
      The journey through the realm of cloud computing has been both enlightening and dynamic. It's a testament to the ever-evolving nature of technology and the potential for cloud computing to shape the future of how we compute, collaborate, and innovate. As we embrace the opportunities and address the challenges, the cloud remains a powerful force driving the digital era forward.
    </p>
    </article>
    `,
  },
];

const topicsContainer = document.getElementById("topics");
const content = document.getElementById("content");

const updateActiveTopic = (activeElement) => {
  const topics = topicsContainer.querySelectorAll(".topic");
  topics.forEach((topic) => {
    topic.classList.remove("active");
  });
  activeElement.classList.add("active");
};

const updateContent = (index) => {
  let topicElement = document.createElement("div");

  topicElement.textContent = topics[index].title;
  topicElement.classList.add("topic");
  topicElement.onclick = function () {
    scrollToTop();
    content.innerHTML = topics[index].content;
    updateActiveTopic(topicElement);
  };
  topicsContainer.appendChild(topicElement);
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

topics.forEach((item, _i) => {
  updateContent(_i);
});
