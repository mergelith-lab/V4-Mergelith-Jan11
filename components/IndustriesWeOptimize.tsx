import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Phone, Calendar, Users, MessageSquare, Zap, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SectorDetail {
  title: string;
  subtitle?: string;
  sections: {
    heading: string;
    items: string[];
  }[];
  footer?: string;
}

const sectorData: Record<string, SectorDetail> = {
  "Car Dealerships": {
    title: "Car Dealerships",
    subtitle: "Elevate customer service, optimize the sales process, and maximize lead conversion.",
    sections: [
      {
        heading: "Boost Sales With AI Agents",
        items: [
          "High-Volume Capability: Call 10,000 leads per minute and engage 1,000 customers simultaneously, ensuring maximum outreach and lead coverage.",
          "Appointment Setting: AI agents can act as dedicated appointment setters, directly booking leads into your CRM system, reducing manual input and ensuring accurate data capture.",
          "Test Drive Scheduling: Automate the process of organizing and scheduling test drives, handling both inbound requests and outbound calls to existing customers.",
          "Proactive Sales Engagement: AI-powered cold callers reach out to leads, nurturing potential buyers and increasing conversion rates.",
          "Live Transfers and Support: Instantly transfer qualified leads to your sales team or provide immediate support for inquiries, ensuring a seamless customer experience."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Cold Callers: Reach potential buyers with personalized offers and promotions.",
          "Dispatchers: Manage scheduling for test drives, appointments, and more.",
          "Appointment Setters: Directly book appointments into any CRM, ensuring smooth lead management.",
          "Live Transfers: Seamlessly connect interested customers to your sales representatives.",
          "AI Assistants: Provide real-time information and support to potential buyers.",
          "Customer Service Representatives: Handle post-purchase support, feedback collection, and customer satisfaction surveys."
        ]
      }
    ],
    footer: "With Conversational AI, car dealerships can elevate their customer service, optimize the sales process, and maximize lead conversion. Deploy our AI agents to ensure every lead is nurtured effectively and efficiently booked into your system."
  },
  "Body Shops & Service": {
    title: "Body Shops & Service",
    subtitle: "The auto repair industry is highly competitive, making efficient and professional communication with clients essential for success.",
    sections: [
      {
        heading: "Enhancing Client Communication with AI Agents",
        items: [
          "24/7 Availability: AI agents provide round-the-clock support, handling inquiries and service requests via phone and other communication channels.",
          "Appointment Setting: Automate booking for repairs and services, directly integrating into your CRM for seamless management.",
          "Proactive Updates: Notify customers about repair completion, upcoming maintenance, and special offers.",
          "Customer Follow-Ups: AI agents can perform follow-up calls to remind clients of necessary services and gather feedback."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Cold Callers: Reach potential clients with promotional offers and new services.",
          "Dispatchers: Schedule appointments and manage customer queues efficiently.",
          "Appointment Setters: Book service appointments directly into your CRM, reducing manual work.",
          "Live Transfers: Connect clients to human representatives for complex inquiries.",
          "AI Assistants: Provide immediate answers to common questions about services and costs.",
          "Customer Service Representatives: Manage post-service support and feedback collection."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Reduce Missed Calls: AI handles high volumes, ensuring no client call is missed during peak seasons.",
          "Unburden Technicians: Allow your team to focus on repairs while AI manages customer interactions.",
          "Increase Customer Loyalty: Timely and accurate communication enhances customer satisfaction and retention."
        ]
      }
    ],
    footer: "Deploying AI agents in your auto repair shop can significantly improve customer service, streamline operations, and enhance your business reputation. Leverage our Conversational AI to transform your customer engagement today!"
  },
  "Financial Institutions": {
    title: "Financial Institutions",
    subtitle: "In the banking industry, maintaining constant and efficient communication with clients is crucial. Mergelith's conversational AI agents provide high-quality support, ensuring customer loyalty through prompt and accurate service.",
    sections: [
      {
        heading: "Optimizing Banking Services with AI Agents",
        items: [
          "24/7 Hotline Support: AI agents provide round-the-clock assistance, handling customer inquiries related to account management, loan services, and more, improving the bank's reputation and accessibility.",
          "Technical Support: Manage technical issues with online banking or mobile applications, providing instant troubleshooting and solutions.",
          "Financial Consultations: AI agents can offer information on exchange rates, loan options, and more, based on real-time data.",
          "Appointment Setting: AI agents can book appointments directly into the bank’s CRM for in-branch consultations or loan discussions."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Cold Callers: Reach out to clients with new product offers and promotions.",
          "Dispatchers: Route calls to specialized departments or representatives.",
          "Appointment Setters: Book in-person or virtual consultations seamlessly.",
          "Live Transfers: Connect clients to human agents for complex inquiries.",
          "AI Assistants: Provide instant answers on account balances, transaction history, and more.",
          "Customer Service Representatives: Handle complaints, feedback, and post-transaction support."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "High Capacity: Engage with up to 1,000 clients simultaneously, reducing wait times and improving customer satisfaction.",
          "Improved Efficiency: Free up human agents to handle high-value tasks while AI manages routine inquiries.",
          "Enhanced Data Security: AI agents follow stringent data protocols to ensure compliance with financial regulations."
        ]
      }
    ],
    footer: "Deploy AI voice agents in your bank to streamline customer service, increase efficiency, and enhance client satisfaction. Contact us today to learn how our Conversational AI can support your financial institution!"
  },
  "Beauty and Wellness Centers": {
    title: "Beauty and Wellness Centers",
    subtitle: "In the highly competitive beauty industry, managing client communication is key to building loyalty and driving repeat business. Mergelith's Conversational AI agents can help beauty salons streamline operations, handle appointments, and manage customer relationships effectively.",
    sections: [
      {
        heading: "Optimizing Beauty Salon Services with AI",
        items: [
          "24/7 Appointment Scheduling: AI agents handle bookings, cancellations, and reminders across phone, email, and messaging platforms, ensuring no missed opportunities.",
          "Customer Engagement: Inform clients about new services, promotions, and upcoming appointments.",
          "Complaint Handling: AI agents manage negative feedback professionally, helping to maintain a positive salon image."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Booking Assistants: Manage appointments and scheduling conflicts.",
          "Customer Service Representatives: Handle inquiries and complaints.",
          "AI Assistants: Provide real-time information on services and promotions.",
          "Outbound Campaigns: Reactivate old clients and promote new offers."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Customer Experience: Efficient responses build loyalty and satisfaction.",
          "Increased Bookings: AI reminders and proactive engagement drive more appointments.",
          "Operational Efficiency: Reduce workload on staff, allowing them to focus on in-salon experiences."
        ]
      }
    ],
    footer: "Deploy our AI agents to elevate your beauty salon’s customer service, increase bookings, and enhance client loyalty. Contact us today to see how our Conversational AI can support your business!"
  },
  "Cargo & Logistics": {
    title: "Cargo & Logistics",
    subtitle: "Efficient communication is vital for logistics and cargo delivery companies to manage high volumes of requests and ensure timely delivery. Mergelith's conversational AI agents can support these companies by managing inquiries, tracking shipments, and optimizing delivery operations.",
    sections: [
      {
        heading: "Optimizing Logistics Operations with AI",
        items: [
          "24/7 Customer Support: AI agents handle inquiries about delivery status, shipment tracking, and order placement via phone, email, and messaging platforms.",
          "Order Management: Automate order processing, confirmations, and updates, ensuring no missed requests.",
          "Route Optimization: AI can assist in coordinating delivery routes and providing real-time updates to drivers and customers.",
          "Proactive Notifications: Send automated SMS or email alerts regarding delivery status, delays, or changes."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Order Processors: Manage incoming orders and schedule deliveries.",
          "Logistics Assistants: Track shipments and provide real-time updates.",
          "AI Assistants: Offer information on delivery options, times, and costs.",
          "Customer Service Representatives: Handle complaints, feedback, and post-delivery support."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Efficiency: AI agents handle routine inquiries, reducing workload on staff.",
          "Enhanced Communication: Provide real-time support and updates to customers and couriers.",
          "Scalable Support: Manage high volumes of requests without additional staffing costs."
        ]
      }
    ],
    footer: "Deploy our AI agents to optimize your logistics operations, improve customer satisfaction, and ensure timely delivery. Contact us today to see how our Conversational AI can support your business!"
  },
  "Cleaning Companies": {
    title: "Cleaning Companies",
    subtitle: "The cleaning industry relies on prompt and professional service to maintain customer satisfaction and loyalty. Mergelith's conversational AI agents can streamline communication and ensure efficient handling of client requests, making your cleaning company more responsive and reliable.",
    sections: [
      {
        heading: "Optimizing Cleaning Services with AI",
        items: [
          "24/7 Request Management: AI agents can handle incoming requests via phone, email, or chat, scheduling cleaning services and providing immediate support.",
          "Appointment Setting: Automatically book and confirm cleaning appointments, directly integrating into your scheduling system.",
          "Service Recommendations: Provide personalized service packages based on client needs, increasing the average order value.",
          "Customer Feedback: Collect feedback and handle complaints to continuously improve service quality."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Order Takers: Manage bookings and answer queries about services.",
          "Dispatchers: Coordinate cleaning teams and logistics efficiently.",
          "AI Assistants: Provide real-time support and service information.",
          "Customer Service Representatives: Handle complaints, feedback, and post-service inquiries."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Response Time: Handle high volumes of requests promptly, ensuring no missed opportunities.",
          "Increased Customer Loyalty: Provide efficient and personalized service to enhance customer satisfaction.",
          "Reduced Operational Costs: AI agents manage routine tasks, allowing your team to focus on quality control and service delivery."
        ]
      }
    ],
    footer: "Deploy our AI agents to optimize your cleaning company's customer service, improve efficiency, and enhance client satisfaction. Contact us today to see how we can support your business growth!"
  },
  "Coaching and Consulting": {
    title: "Coaching and Consulting",
    subtitle: "In the consulting and coaching industry, effective client communication is key to delivering value and building long-term relationships. Mergelith’s Conversational AI agents can streamline interactions, allowing your experts to focus on high-value consulting tasks.",
    sections: [
      {
        heading: "Enhancing Consulting Services with AI",
        items: [
          "24/7 Support Hotline: AI agents can handle inquiries, provide initial consultations, and manage client follow-ups, ensuring continuous availability.",
          "Omnichannel Support: Engage with clients across phone, email, and messaging platforms, providing consistent and professional assistance.",
          "Appointment Setting: Schedule consultations and follow-up meetings directly into your CRM, reducing scheduling conflicts and optimizing time management.",
          "Information Support: AI agents can provide basic advice on frequently asked questions, freeing up consultants for in-depth sessions."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Initial Consultations: Handle introductory calls and gather preliminary client information.",
          "Appointment Setters: Book consultations and follow-up sessions directly into your scheduling system.",
          "AI Assistants: Provide support on general inquiries related to taxes, accounting, legal services, and more.",
          "Customer Service Representatives: Manage client feedback, complaints, and post-consultation support."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Optimized Client Engagement: Ensure all inquiries are addressed promptly, improving client satisfaction.",
          "Reduced Workload: AI agents handle routine tasks, allowing consultants to focus on complex client needs.",
          "Scalable Support: Manage increased client traffic without additional staffing costs."
        ]
      }
    ],
    footer: "Deploy our AI agents to enhance client communication, optimize your consulting operations, and grow your business. Contact us today to see how our Conversational AI can support your consulting and coaching services!"
  },
  "E-Commerce Store": {
    title: "E-Commerce Store",
    subtitle: "In the fast-paced world of online retail, providing 24/7 customer support is crucial to managing high volumes of inquiries and boosting sales. Mergelith’s Conversational AI agents can efficiently handle customer interactions across multiple channels, ensuring a seamless shopping experience.",
    sections: [
      {
        heading: "Enhancing E-commerce with AI",
        items: [
          "24/7 Multichannel Support: AI agents manage customer inquiries via phone, chat, and messaging platforms, ensuring round-the-clock availability.",
          "Order Management: Confirm orders, provide delivery updates, and handle returns or exchanges.",
          "Product Recommendations: Increase the average order value through AI-driven up-selling and cross-selling.",
          "Customer Feedback: Collect reviews and suggestions post-purchase to enhance service quality."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Order Takers: Handle high volumes of orders and inquiries across multiple platforms.",
          "Dispatchers: Coordinate deliveries and manage logistics.",
          "AI Assistants: Provide real-time support and product information.",
          "Customer Service Representatives: Manage complaints, returns, and feedback."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Increased Conversion Rates: Quick responses and personalized assistance improve customer satisfaction and conversion rates.",
          "Scalable Operations: Handle large volumes of requests without increasing staffing costs.",
          "Reduced Operational Costs: AI agents manage routine inquiries, freeing up human resources for complex tasks."
        ]
      }
    ],
    footer: "Deploy our AI agents to optimize your online store’s customer service, boost sales, and enhance customer satisfaction. Contact us today to learn how our Conversational AI can support your e-commerce business!"
  },
  "Law Firms": {
    title: "Law Firms",
    subtitle: "In the legal industry, prompt and accurate communication is essential for managing cases and building client trust. Mergelith's Conversational AI agents can streamline interactions, allowing your legal experts to focus on complex case work.",
    sections: [
      {
        heading: "Optimizing Legal Services with AI",
        items: [
          "24/7 Client Support: AI agents handle inquiries, provide initial case assessments, and manage client follow-ups, ensuring round-the-clock availability.",
          "Appointment Setting: Schedule consultations and court dates directly into your CRM, reducing scheduling conflicts.",
          "Document Support: AI agents can provide information on filing procedures and document requirements."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Intake Specialists: Handle introductory calls and gather preliminary case information.",
          "Appointment Setters: Book consultations and follow-up meetings seamlessly.",
          "AI Assistants: Provide support on general legal inquiries and procedures.",
          "Customer Service Representatives: Manage client feedback and post-consultation support."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Client Engagement: Ensure all inquiries are addressed promptly, improving client satisfaction.",
          "Reduced Workload: AI agents handle routine tasks, allowing lawyers to focus on high-value case work.",
          "Scalable Support: Manage increased client traffic without additional staffing costs."
        ]
      }
    ],
    footer: "Deploy our AI agents to enhance client communication, optimize your legal operations, and grow your firm. Contact us today to see how our Conversational AI can support your legal services!"
  },
  "Insurance": {
    title: "Insurance",
    subtitle: "The insurance industry demands high-volume inquiry management and rapid response times. Mergelith's AI agents streamline claims processing and policy inquiries.",
    sections: [
      {
        heading: "Enhancing Insurance Services with AI",
        items: [
          "Claims Assistance: Guide customers through the initial claims reporting process 24/7.",
          "Policy Information: Provide instant answers regarding coverage, deductibles, and policy terms.",
          "Renewal Reminders: Proactively reach out to clients for policy renewals and updates.",
          "Lead Qualification: Screen potential clients and schedule consultations with agents."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Claims Intake Agents: Handle high volumes of incoming claim reports.",
          "Policy Assistants: Provide real-time support for policy-related questions.",
          "Renewal Specialists: Manage outbound renewal campaigns and follow-ups.",
          "Customer Service Representatives: Handle feedback, complaints, and general support."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Faster Claims Processing: Reduce wait times for initial claim reports.",
          "Increased Retention: Proactive renewal outreach improves customer loyalty.",
          "Cost Efficiency: Automate routine inquiries to focus human resources on complex cases."
        ]
      }
    ],
    footer: "Optimize your insurance operations with our Conversational AI. Contact us today to learn more!"
  },
  "IT Companies": {
    title: "IT Companies",
    subtitle: "In the tech sector, providing rapid technical support and managing service requests is critical. Mergelith's AI agents provide a first line of defense for IT service desks.",
    sections: [
      {
        heading: "Optimizing IT Support with AI",
        items: [
          "Level 1 Support: Handle common technical issues like password resets and software access.",
          "Ticket Management: Create, update, and track support tickets directly in your ITSM tool.",
          "Service Status Updates: Provide real-time information on system outages or maintenance.",
          "Appointment Scheduling: Book technical consultations or hardware repair sessions."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Technical Assistants: Provide immediate troubleshooting for common IT issues.",
          "Service Desk Dispatchers: Route complex tickets to the appropriate technical teams.",
          "Status Update Bots: Manage high volumes of inquiries during system outages.",
          "Customer Service Representatives: Handle feedback on support quality and service delivery."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Reduced Ticket Volume: AI handles routine issues, freeing up technicians for complex tasks.",
          "24/7 Support Availability: Ensure technical assistance is available around the clock.",
          "Improved User Satisfaction: Rapid response times and instant solutions for common problems."
        ]
      }
    ],
    footer: "Transform your IT support with Mergelith's Conversational AI. Contact us to see it in action!"
  },
  "Marketing & Advertising": {
    title: "Marketing & Advertising",
    subtitle: "Agencies need to manage lead intake and client communication efficiently. Mergelith's AI agents act as a bridge between potential clients and your creative team.",
    sections: [
      {
        heading: "Enhancing Agency Operations with AI",
        items: [
          "Lead Qualification: Screen inbound inquiries and identify high-potential prospects.",
          "Appointment Setting: Schedule discovery calls and pitch meetings directly into calendars.",
          "Client Onboarding: Guide new clients through initial data collection and setup processes.",
          "Campaign Updates: Provide clients with automated updates on campaign performance and milestones."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Lead Intake Specialists: Handle initial inquiries across multiple channels.",
          "Appointment Setters: Manage scheduling for discovery and strategy sessions.",
          "Onboarding Assistants: Collect necessary assets and information from new clients.",
          "Customer Service Representatives: Manage client feedback and general inquiries."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Higher Conversion Rates: Rapid response to leads increases the likelihood of conversion.",
          "Streamlined Operations: Automate routine administrative tasks to focus on creativity.",
          "Enhanced Client Experience: Provide professional and consistent communication 24/7."
        ]
      }
    ],
    footer: "Scale your agency with Mergelith's Conversational AI. Reach out today for a consultation!"
  },
  "Real Estate": {
    title: "Real Estate",
    subtitle: "The real estate market is highly competitive, making efficient communication with clients essential for success. Mergelith's Conversational AI agents can transform your sales and support processes, ensuring every lead is managed effectively.",
    sections: [
      {
        heading: "Enhancing Real Estate Sales with AI",
        items: [
          "Round-the-Clock Service: AI agents provide 24/7 support, handling inquiries through phone and text channels, reducing missed opportunities.",
          "Appointment Setting: Automatically schedule viewings and consultations, directly integrating with your CRM for seamless management.",
          "Lead Management: Route calls to specific realtors, update client information, and manage follow-ups.",
          "Proactive Engagement: AI agents can make outbound calls to update client databases, conduct surveys, and inform about new listings."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Cold Callers: Reach out to potential clients with property offers and promotions.",
          "Dispatchers: Manage scheduling and connect clients to the right realtor.",
          "Appointment Setters: Book property viewings directly into your CRM.",
          "Live Transfers: Instantly transfer leads to available agents.",
          "AI Assistants: Provide property information and initial consultations.",
          "Customer Service Representatives: Handle inquiries, complaints, and post-transaction support."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Scalable Outreach: Call 10,000 leads per minute and engage 1,000 clients simultaneously.",
          "Improved Conversion Rates: Efficiently manage incoming leads, reducing missed calls and enhancing customer experience.",
          "Cost Efficiency: AI agents handle routine tasks, allowing human agents to focus on high-value interactions."
        ]
      }
    ],
    footer: "Deploy our AI agents to streamline operations, enhance customer service, and boost your real estate agency’s reputation in the market. Contact us today to see how our Conversational AI can transform your business!"
  },
  "Property Management": {
    title: "Property Management",
    subtitle: "Property management companies handle a wide range of tenant inquiries, maintenance requests, and administrative tasks. Mergelith's Conversational AI agents can help streamline operations, ensuring efficient management and enhanced tenant satisfaction.",
    sections: [
      {
        heading: "Optimizing Property Management with AI",
        items: [
          "24/7 Tenant Support: AI agents handle inquiries about leasing, rent payments, and maintenance requests via phone, email, and messaging platforms.",
          "Maintenance Management: Automate the scheduling of repairs and inspections.",
          "Proactive Communication: Send automated rent reminders, lease renewals, and property updates."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Tenant Support Representatives: Handle routine inquiries and complaints.",
          "Maintenance Coordinators: Schedule repairs and follow-ups.",
          "AI Assistants: Provide real-time updates on lease terms, rent status, and maintenance progress.",
          "Outbound Campaigns: Gather tenant feedback and conduct satisfaction surveys."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Efficiency: AI manages routine tasks, reducing workload on staff.",
          "Scalable Support: Handle high volumes of requests without additional staffing costs.",
          "Enhanced Tenant Experience: Quick responses build trust and increase tenant satisfaction."
        ]
      }
    ],
    footer: "Deploy our AI agents to optimize your property management company’s operations and improve tenant relations. Contact us today to see how our Conversational AI can support your business!"
  },
  "Medical Institutions & Facilities": {
    title: "Medical Institutions & Facilities",
    subtitle: "In the healthcare sector, efficient communication is critical for patient care and satisfaction. Mergelith's Conversational AI agents provide 24/7 support, ensuring that medical centers can manage appointments, consultations, and patient inquiries seamlessly.",
    sections: [
      {
        heading: "Optimizing Healthcare Services with AI",
        items: [
          "24/7 Patient Support: AI agents handle calls and messages round-the-clock, providing information and booking appointments.",
          "Appointment Scheduling: Automate booking and reminders, reducing no-shows and optimizing clinic schedules.",
          "Consultation Assistance: AI can offer answers to frequently asked questions and direct patients to the appropriate department or specialist.",
          "Patient Feedback Collection: Gather patient feedback for quality improvement."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Hotline Support: Manage inquiries and urgent requests.",
          "Appointment Setters: Schedule and confirm appointments directly in your CRM.",
          "AI Assistants: Provide information on services, doctors, and clinic hours.",
          "Customer Service Representatives: Handle post-consultation inquiries and complaints."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Increased Patient Satisfaction: Quick responses and efficient scheduling improve patient experience.",
          "Cost Efficiency: AI agents manage routine inquiries, reducing the need for additional staff.",
          "Improved Healthcare Access: 24/7 availability ensures patients can reach the clinic anytime."
        ]
      }
    ],
    footer: "Deploy our AI agents to enhance patient care, streamline operations, and improve healthcare delivery. Contact us today to see how our Conversational AI can support your medical center!"
  },
  "Travel & Tourism Companies": {
    title: "Travel & Tourism Companies",
    subtitle: "Travel companies experience high volumes of inquiries, especially during peak seasons. Mergelith's Conversational AI agents can help manage these demands, handling bookings, answering inquiries, and providing real-time support to enhance customer satisfaction.",
    sections: [
      {
        heading: "Optimizing Travel Services with AI",
        items: [
          "24/7 Customer Support: AI agents manage inquiries about destinations, bookings, and tour packages via phone, email, and messaging platforms.",
          "Booking Management: Automate reservations, confirmations, and updates for seamless transactions.",
          "Proactive Communication: Send automated reminders and updates for trips, promotions, and travel advisories.",
          "Emergency Assistance: Provide quick support during travel disruptions or emergencies."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Customer Support Representatives: Manage inquiries and complaints.",
          "Booking Assistants: Handle reservations and modifications.",
          "AI Assistants: Provide real-time information on destinations and services.",
          "Outbound Campaigns: Inform clients about promotions and gather feedback."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Enhanced Customer Experience: Quick and accurate responses build loyalty.",
          "Operational Efficiency: AI manages routine tasks, reducing workload on staff.",
          "Scalable Support: Handle high volumes of requests during peak seasons without additional staffing costs."
        ]
      }
    ],
    footer: "Deploy our AI agents to elevate your travel company’s customer service, streamline operations, and improve client satisfaction. Contact us today to see how our Conversational AI can support your business!"
  },
  "Pet Store": {
    title: "Pet Store",
    subtitle: "A call center for pet stores is professional help in servicing customers and increasing sales. A large flow of orders, applications or just advice on products are exactly the cases when a call center for pet stores will be necessary.",
    sections: [
      {
        heading: "Boosting Pet Store Operations with AI",
        items: [
          "24/7 Customer Support: AI agents handle inquiries about product availability, order status, and delivery times, ensuring no customer is left waiting.",
          "Product Recommendations: Assist customers in choosing the right products for their pets, increasing the average order value.",
          "Order Management: AI agents can confirm orders, provide updates, and handle returns or exchanges.",
          "Customer Retention: Reach out to previous customers with new offers, promotions, or restocked items."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Cold Callers: Inform customers about new products or promotions.",
          "Dispatchers: Coordinate deliveries and manage order logistics.",
          "AI Assistants: Provide real-time support in online chats or via phone.",
          "Customer Service Representatives: Handle complaints, feedback, and special requests."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Increased Sales: Proactive engagement and personalized recommendations drive higher conversion rates.",
          "Improved Customer Experience: Quick responses and personalized service build customer loyalty.",
          "Reduced Operational Costs: AI agents handle routine queries, reducing the need for additional staff."
        ]
      }
    ],
    footer: "Deploy our AI agents to enhance your pet store’s customer service, streamline operations, and increase sales. Contact us today to see how we can support your business!"
  },
  "Construction Companies": {
    title: "Construction Companies",
    subtitle: "Construction companies handle numerous client inquiries daily, making efficient communication crucial. Mergelith's conversational AI agents can help manage client interactions, streamline order processes, and provide support during peak construction seasons.",
    sections: [
      {
        heading: "Optimizing Construction Services with AI",
        items: [
          "24/7 Customer Support: AI agents manage inquiries about building materials, services, and order statuses via phone, email, and messaging platforms.",
          "Order Management: Automate order placement, confirmations, and updates to ensure seamless communication.",
          "Project Coordination: AI can assist with project updates and communication between clients and contractors."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Customer Support Assistants: Handle inquiries and provide product information.",
          "Order Processors: Manage incoming orders and schedule deliveries.",
          "AI Assistants: Offer real-time updates on project timelines and order status.",
          "Outbound Campaigns: Conduct surveys and gather feedback."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Efficiency: AI manages routine tasks, reducing the workload on staff.",
          "Scalable Support: Handle high volumes of requests without additional staffing costs.",
          "Enhanced Customer Experience: Quick and accurate responses increase customer satisfaction."
        ]
      }
    ],
    footer: "Deploy our AI agents to optimize your construction company’s customer service, streamline operations, and improve client satisfaction. Contact us today to see how our Conversational AI can support your business!"
  },
  "Delivery Services": {
    title: "Delivery Services",
    subtitle: "In the fast-paced food delivery industry, efficient communication is crucial for managing orders and providing excellent customer service. Mergelith's Conversational AI agents can help streamline the ordering process and enhance customer satisfaction.",
    sections: [
      {
        heading: "Optimizing Food Delivery with AI Agents",
        items: [
          "24/7 Order Management: AI agents can take orders via phone, mobile apps, and messaging platforms, ensuring round-the-clock availability.",
          "Menu Assistance: Provide customers with detailed menu options, suggest items, and inform them about ongoing promotions, increasing the average order value.",
          "Order Tracking and Updates: AI agents can offer real-time updates on order status and estimated delivery times.",
          "Customer Feedback: Collect customer feedback after order delivery to improve service quality."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Order Takers: Handle high volumes of orders across multiple channels.",
          "Dispatchers: Coordinate with delivery drivers to ensure timely deliveries.",
          "AI Assistants: Offer menu recommendations and handle inquiries about availability.",
          "Customer Service Representatives: Address issues like order discrepancies or delays.",
          "Appointment Setters: Book reservations or catering services."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "High Capacity Management: Handle peak-time orders without missing any customer requests.",
          "Enhanced Efficiency: AI reduces the burden on human employees, enabling them to focus on quality control.",
          "Increased Customer Loyalty: Timely, accurate service builds trust and encourages repeat business."
        ]
      }
    ],
    footer: "Deploy our AI agents to optimize your food delivery service, manage customer interactions, and ensure timely delivery. Contact us today to learn how our Conversational AI can support your business growth!"
  },
  "Flower Shops": {
    title: "Flower Shops",
    subtitle: "Flower shops thrive on quick and personalized customer service. Mergelith's Conversational AI agents can help flower shops handle orders, provide bouquet recommendations, and manage deliveries efficiently.",
    sections: [
      {
        heading: "Optimizing Flower Shop Services with AI",
        items: [
          "24/7 Customer Support: AI agents handle inquiries about bouquet options, prices, and delivery times via phone, email, and messaging platforms.",
          "Order Management: Automate order placements, confirmations, and updates, ensuring timely service.",
          "Proactive Communication: Send automated reminders for special dates, promotions, and order confirmations.",
          "Complaint Resolution: Manage complaints and provide immediate assistance to maintain customer satisfaction."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Order Processors: Manage incoming orders and schedule deliveries.",
          "Customer Service Representatives: Handle inquiries and complaints.",
          "AI Assistants: Provide real-time information on floral arrangements and services.",
          "Outbound Campaigns: Notify customers about promotions and gather feedback."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Efficiency: AI manages routine tasks, reducing workload on staff.",
          "Enhanced Customer Experience: Quick and personalized responses build customer loyalty.",
          "Scalable Support: Handle high volumes of requests without additional staffing costs."
        ]
      }
    ],
    footer: "Deploy our AI agents to optimize your flower shop’s customer service, streamline operations, and improve client satisfaction. Contact us today to see how our Conversational AI can support your business!"
  },
  "Political Parties": {
    title: "Political Parties",
    subtitle: "In political campaigns, effective communication with the electorate is crucial. Mergelith's Conversational AI agents provide seamless support, enabling political parties to engage with voters, handle inquiries, and gather valuable feedback.",
    sections: [
      {
        heading: "Optimizing Political Communication with AI",
        items: [
          "24/7 Hotline Support: AI agents manage voter inquiries, provide information on political programs, and offer assistance with registration or voting details.",
          "Voter Outreach: AI can reach out to voters with personalized messages, event invitations, and campaign updates.",
          "Survey and Polling: Conduct political surveys and update voter databases efficiently.",
          "Complaint and Suggestion Management: AI agents handle voter feedback, complaints, and suggestions, ensuring issues are addressed promptly."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Hotline Support: Provide round-the-clock assistance to voters and the electorate.",
          "Voter Outreach: Engage with voters to promote political programs and increase support.",
          "Survey Conductors: Collect data on voter opinions and feedback.",
          "AI Assistants: Offer information on party platforms, candidate details, and events."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Enhanced Voter Engagement: Quick, efficient communication builds trust and strengthens voter relationships.",
          "Efficient Data Collection: Gather and analyze voter data to refine campaign strategies.",
          "Cost Efficiency: AI handles routine tasks, reducing the need for additional staffing."
        ]
      }
    ],
    footer: "Deploy our AI agents to streamline your party’s communication, engage with voters effectively, and support your campaign efforts. Contact us today to see how our Conversational AI can help your political party!"
  },
  "Windows Manufacturing & Installation": {
    title: "Windows Manufacturing & Installation",
    subtitle: "In the highly competitive window manufacturing industry, providing exceptional customer service is key to standing out. Mergelith's Conversational AI agents can help streamline communication, handle client inquiries, and improve customer satisfaction.",
    sections: [
      {
        heading: "Optimizing Window Services with AI",
        items: [
          "24/7 Customer Support: AI agents can handle inquiries and requests via phone, email, and messaging platforms around the clock, ensuring no opportunity is missed.",
          "Appointment Scheduling: Automatically schedule consultations, installations, and repairs directly into your CRM, reducing manual work.",
          "Order Management: Provide real-time updates on order status, delivery dates, and installation schedules.",
          "Complaint Handling: AI agents can manage complaints, provide immediate support, and escalate issues to the appropriate department."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Order Processors: Manage incoming orders and service requests.",
          "Appointment Setters: Book consultations and installation dates seamlessly.",
          "AI Assistants: Offer product recommendations and technical information.",
          "Customer Service Representatives: Handle complaints, feedback, and post-installation support."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Customer Experience: Quick and efficient responses increase customer satisfaction.",
          "Operational Efficiency: AI agents handle routine inquiries, allowing staff to focus on complex tasks.",
          "Enhanced Communication: Provide timely updates and support to clients, suppliers, and partners."
        ]
      }
    ],
    footer: "Deploy our AI agents to elevate your window company's customer service, streamline operations, and enhance client satisfaction. Contact us today to see how our Conversational AI can support your business!"
  },
  "Event Planners & Organizers": {
    title: "Event Planners & Organizers",
    subtitle: "Event organizers need to maximize attendance and ensure a seamless experience for participants. Mergelith's Conversational AI agents can assist with event promotion, attendee management, and post-event feedback collection.",
    sections: [
      {
        heading: "Optimizing Event Management with AI",
        items: [
          "24/7 Attendee Support: AI agents handle inquiries about event details, registration, and ticketing via phone, email, and messaging platforms.",
          "Personalized Invitations: AI agents can reach out to potential attendees, highlight event benefits, and handle RSVPs.",
          "Post-Event Feedback: Collect attendee feedback to assess event success and improve future experiences.",
          "Event Updates: Provide real-time updates on schedule changes, speaker information, and venue directions."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Event Promoters: Reach out to targeted audiences and drive registrations.",
          "Registration Assistants: Manage attendee registration and ticketing.",
          "AI Assistants: Provide real-time event information and updates.",
          "Customer Service Representatives: Handle inquiries, complaints, and feedback."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Increased Attendance: Personalized outreach and support drive higher event participation.",
          "Efficient Communication: AI agents manage high volumes of inquiries, reducing workload on staff.",
          "Improved Attendee Experience: Real-time support and updates ensure a smooth event experience."
        ]
      }
    ],
    footer: "Deploy our AI agents to enhance your event management, optimize communication, and ensure successful events. Contact us today to see how our Conversational AI can support your events!"
  },
  "Start Ups & Business Ventures": {
    title: "Start Ups & Business Ventures",
    subtitle: "Startups require a strong foundation in customer service to build trust and scale efficiently. Mergelith's Conversational AI agents offer scalable, cost-effective solutions, enabling startups to manage customer interactions professionally without significant investment.",
    sections: [
      {
        heading: "Enhancing Startup Operations with AI",
        items: [
          "24/7 Customer Support: AI agents handle inquiries and provide support via phone, email, and messaging platforms.",
          "Lead Qualification: AI can engage with potential clients, qualifying and prioritizing leads.",
          "Product Consultation: Offer detailed product or service information to curious prospects.",
          "Complaint Resolution: AI can manage complaints, ensuring prompt resolutions to maintain a positive image."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Customer Support Assistants: Provide information and resolve common inquiries.",
          "Lead Nurturing: Engage and qualify potential customers.",
          "AI Assistants: Handle routine queries and gather customer feedback.",
          "Outbound Campaigns: Inform clients about new offerings or updates."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Cost Efficiency: AI solutions reduce staffing needs, lowering operational costs.",
          "Scalable Support: Manage high volumes of requests as the business grows.",
          "Improved Customer Engagement: Quick, professional responses enhance customer trust and loyalty."
        ]
      }
    ],
    footer: "Deploy our AI agents to elevate your startup’s customer service, optimize operations, and support growth. Contact us today to see how our Conversational AI can assist your startup!"
  },
  "Telecom Services": {
    title: "Telecom Services",
    subtitle: "Efficient communication and prompt support are crucial for Internet and telecom providers. Mergelith's Conversational AI agents offer seamless, 24/7 technical support and customer service, enhancing user experience and loyalty.",
    sections: [
      {
        heading: "Optimizing Telecom Services with AI",
        items: [
          "24/7 Technical Support: AI agents handle inquiries related to connections, tariff changes, and payments.",
          "Complaint Management: AI can efficiently log and manage complaints, ensuring timely resolutions.",
          "Proactive Notifications: Send automated messages for service outages, maintenance, or balance updates.",
          "Upselling and Retention: AI can promote higher-tier plans and win back lost customers."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Tech Support: Resolve common technical issues and provide troubleshooting.",
          "Billing Support: Answer queries on payments, balances, and billing issues.",
          "Outbound Campaigns: Inform clients about upgrades or new plans.",
          "Customer Service Representatives: Handle escalations and complex queries."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Improved Customer Experience: Quick issue resolution increases satisfaction.",
          "Operational Efficiency: AI agents handle routine tasks, freeing up human agents for complex issues.",
          "Scalable Solutions: Handle high call volumes without additional staffing."
        ]
      }
    ],
    footer: "Deploy our AI agents to enhance your customer support, streamline operations, and improve customer satisfaction. Contact us today to see how our Conversational AI can support your telecom business!"
  },
  "Solar & Roofing Companies": {
    title: "Solar & Roofing Companies",
    subtitle: "Solar and roofing companies handle high volumes of client inquiries related to installation, cost, and service options. Mergelith's Conversational AI agents provide scalable, 24/7 support to streamline these interactions, enhancing customer satisfaction.",
    sections: [
      {
        heading: "Optimizing Solar & Roofing Services with AI",
        items: [
          "24/7 Client Support: AI agents handle inquiries on installation, pricing, and service details across phone, email, and messaging platforms.",
          "Appointment Scheduling: Automate bookings for consultations and installations.",
          "Proactive Communication: Send updates on project timelines, inspections, and maintenance."
        ]
      },
      {
        heading: "Deployment of AI Agents",
        items: [
          "Customer Support Representatives: Handle inquiries and complaints.",
          "Appointment Assistants: Manage consultation and installation schedules.",
          "AI Assistants: Provide real-time information on services, warranties, and financing options.",
          "Outbound Campaigns: Conduct follow-ups, promotions, and gather feedback."
        ]
      },
      {
        heading: "Key Benefits",
        items: [
          "Enhanced Efficiency: AI manages routine tasks, reducing workload on staff.",
          "Scalable Support: Handle high volumes of requests without additional staffing costs.",
          "Improved Customer Experience: Quick, accurate responses improve client satisfaction."
        ]
      }
    ],
    footer: "Deploy our AI agents to elevate your solar or roofing company’s customer service, streamline operations, and improve client engagement. Contact us today to see how our Conversational AI can support your business!"
  }
};

const IndustriesWeOptimize: React.FC = () => {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const industryGroups = [
    {
      title: "Professional & Financial",
      industries: ["Law Firms", "Financial Institutions", "Insurance", "IT Companies", "Coaching and Consulting", "Marketing & Advertising", "Start Ups & Business Ventures", "Telecom Services"]
    },
    {
      title: "Real Estate & Logistics",
      industries: ["Property Management", "Real Estate", "Cargo & Logistics", "Transportation & Logistics", "Travel & Tourism Companies"]
    },
    {
      title: "Healthcare & Public",
      industries: ["Medical Institutions & Facilities", "Vet Clinics", "Political Parties"]
    },
    {
      title: "Retail & Hospitality",
      industries: ["Beauty and Wellness Centers", "Flower Shops", "Delivery Services", "E-Commerce Store", "Car Dealerships", "Pet Store"]
    },
    {
      title: "Maintenance & Specialized",
      industries: ["Body Shops & Service", "Cleaning Companies", "Solar & Roofing Companies", "Event Planners & Organizers", "Construction Companies", "Windows Manufacturing & Installation"]
    },
  ];

  const handleSectorClick = (industry: string) => {
    if (sectorData[industry]) {
      setSelectedSector(industry);
    } else {
      // For others, we could scroll to contact or show a generic message
      const contact = document.getElementById('contact');
      contact?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="scroll-mt-32 relative">
      <div className="space-y-24">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-[11px] uppercase tracking-[0.5em] text-gold font-black">Market Coverage</h3>
          <h2 className="text-5xl md:text-6xl font-serif text-navy italic leading-tight">
            Industries We <span className="text-gold">Optimize</span>
          </h2>
          <p className="text-xl text-navy/70 font-light leading-relaxed max-w-3xl mx-auto border-t border-gold/20 pt-8">
            Our strength lies in our individuality. Mergelith strives to bring in the best talent in various fields, from architecture to interior design and sales, to engineer institutional growth.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {industryGroups.map((group, idx) => (
            <div key={idx} className="glass-card p-10 space-y-8 border-navy/5 hover:border-gold/30 transition-all group">
              <h4 className="text-navy font-cinzel text-xs tracking-[0.4em] uppercase font-black border-b border-gold/20 pb-4 group-hover:text-gold transition-colors">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.industries.map((industry, i) => (
                  <li key={i}>
                    <button 
                      onClick={() => handleSectorClick(industry)}
                      className="flex items-center gap-3 text-navy/60 hover:text-gold transition-all group/item text-left w-full"
                    >
                      <span className="w-1 h-1 bg-gold rounded-full group-hover/item:scale-150 transition-transform"></span>
                      <span className="text-sm font-medium tracking-wide uppercase text-[10px] border-b border-transparent group-hover/item:border-gold/30">
                        {industry}
                      </span>
                      {sectorData[industry] && (
                        <ArrowRight size={10} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}


        </div>

        {/* Bottom Callout */}
        <div className="text-center pt-12">
          <p className="text-[11px] text-navy/30 uppercase tracking-[0.6em] font-black italic">
            Institutional Growth Systems Across 25+ Global Sectors
          </p>
        </div>
      </div>

      {/* Sector Detail Modal */}
      <AnimatePresence>
        {selectedSector && sectorData[selectedSector] && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSector(null)}
              className="absolute inset-0 bg-navy/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-pearl rounded-sm shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-8 md:p-12 border-b border-navy/10 flex justify-between items-start bg-white">
                <div className="space-y-4">
                  <h3 className="text-gold text-[10px] uppercase tracking-[0.5em] font-black">Sector Optimization</h3>
                  <h2 className="text-4xl md:text-5xl font-serif text-navy italic">{sectorData[selectedSector].title}</h2>
                  {sectorData[selectedSector].subtitle && (
                    <p className="text-navy/60 font-light max-w-2xl">{sectorData[selectedSector].subtitle}</p>
                  )}
                </div>
                <button 
                  onClick={() => setSelectedSector(null)}
                  className="p-2 hover:bg-navy/5 rounded-full transition-colors text-navy/40 hover:text-navy"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  {sectorData[selectedSector].sections.map((section, idx) => (
                    <div key={idx} className="space-y-6">
                      <h4 className="text-navy font-cinzel text-xs tracking-[0.3em] uppercase font-black border-l-2 border-gold pl-4">
                        {section.heading}
                      </h4>
                      <ul className="space-y-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-4 items-start group/li">
                            <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                            <p className="text-sm text-navy/70 font-light leading-relaxed group-hover/li:text-navy transition-colors">
                              {item}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {sectorData[selectedSector].footer && (
                  <div className="p-8 bg-gold/5 border border-gold/10 rounded-sm">
                    <p className="text-navy font-serif italic text-lg text-center">
                      {sectorData[selectedSector].footer}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t border-navy/5 bg-white flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-8">
                  <div className="flex items-center gap-2 text-[10px] font-black text-navy/40 uppercase tracking-widest">
                    <Zap size={12} className="text-gold" />
                    High-Volume Ready
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-black text-navy/40 uppercase tracking-widest">
                    <ShieldCheck size={12} className="text-gold" />
                    CRM Integrated
                  </div>
                </div>
                <a 
                  href="https://api.leadconnectorhq.com/widget/bookings/mergelith-calendar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4 text-[10px] w-full md:w-auto text-center"
                >
                  Schedule A Custom Demo
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IndustriesWeOptimize;
