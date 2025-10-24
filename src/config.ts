export const siteConfig = {
  name: "Dennis Murtic",
  title: "Freiberuflicher IT Berater & DevOps Engineer",
  description: "Portfolio von Dennis Murtic - IT Berater & Softwareentwickler",
  accentColor: "#1d4ed8",
  social: {
    email: "kontakt@freelanceit.tech",
    linkedin: "https://linkedin.com/in/dennismurtic",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["AWS", "Kubernetes", "Golang", "IT Architecture (Software/Infrastruktur)", "DevOps", "Microservices", "GitOps", "CI/CD", "Monitoring and Logging", "Agile Methodologies", "Infrastructure As Code"],
  projects: [
      {
          name: "Aufbau einer ITSM Plattform auf Service Now Basis",
          description: "Konzeption und Implementierung einer ITSM Plattform auf Basis von Service Now zur Unterstützung der IT-Service-Management-Prozesse. Als Tech Lead bin ich für die technische Gesamtverantwortung der Entwicklung auf der ServiceNow-Plattform zuständig.",
          skills: ["ITSM", "Service Now", "JavaScript", "GIT", "Agile Methoden"],
      },
      {
          name: "Cloud Native Plattform | Developer Portal",
          description: "Entwicklung und Betrieb einer Cloud Native Plattform zur Bereitstellung von Infrastruktur- und Plattformdiensten für Entwicklerteams.",
          skills: ["Kubernetes", "Crossplane", "Golang", "Terraform", "Helm", "GitOps", "CI/CD", "Prometheus", "Grafana"],
      },
      {
          name: "meshcloud Multi-Cloud Management Plattform",
          description: "Betreuung und Weiterentwicklung der meshcloud Multi-Cloud Management Plattform, die es Unternehmen ermöglicht, ihre Cloud-Ressourcen über verschiedene Cloud-Anbieter hinweg zu verwalten.",
          skills: ["Kubernetes", "Docker", "Kotlin", "Dhall", "CI/CD", "Prometheus", "Grafana"],
      },
      {
          name: "Aufbau hybrid Cloud mit Azure und Google Cloud",
            description: "Konzeption und Implementierung einer hybriden Cloud-Infrastruktur unter Verwendung von Microsoft Azure und Google Cloud Platform (GCP) zur Unterstützung der Geschäftsanforderungen.",
            skills: ["Azure", "Google Cloud", "Terraform", "Express Route", "Interconenct", "CI/CD"],
      }
  ],
  experience: [
      {
        title: "IT Architekt",
        company: "DB InfraGO AG",
        dateRange: "12/2024 - Heute",
          bullets: [
              "Tech Lead / Lead Developer / Solution Architect für den Aufbau einer ITSM Plattform auf Service Now Basis.",
              "System Architect für ein ART im Scaled Agile Framework (SAFe) Umfeld.",
              "Verantwortlich für die technische Konzeption und Umsetzung der Plattform.",
              "Koordination und Führung des Entwicklerteams.",
              "Sicherstellung der Einhaltung von Qualitätsstandards und Best Practices.",
          ],
      },
      {
          title: "Senior DevOps Engineer",
          company: "DB Systel AG",
          dateRange: "08/2021 - 12/2024",
          bullets: [
              "Entwicklung und Betrieb einer Cloud Native Plattform zur Bereitstellung von Infrastruktur- und Plattformdiensten für Entwicklerteams.",
              "Implementierung von Infrastructure as Code (IaC) mit Terraform und Crossplane.",
              "Automatisierung von CI/CD-Pipelines mit GitLab CI.",
              "Überwachung und Logging der Plattform mit Prometheus und Grafana.",
              "Bereitstellung von Data Warehouse Anwendungen und Data Lakes in AWS Cloud Umgebungen.",
          ],
      },
      {
          title: "Site Reliability Engineer",
          company: "meshcloud",
          dateRange: "11/2020 - 06/2021",
          bullets: [
                "Betreuung der meshcloud Multi-Cloud Management Plattform.",
              "Optimierung der Plattform für Skalierbarkeit und Zuverlässigkeit.",
              "Implementierung von Monitoring- und Logging-Lösungen.",
              "Zusammenarbeit mit Entwicklungsteams zur Verbesserung der Plattformfunktionen.",
          ],
      },
      {
          title: "Senior IT Professional Cloud Operations",
          company: "ALDI International Services GmbH & Co. oHG",
          dateRange: "10/2019 - 11/2020",
          bullets: [
                "Verantwortlich für den Betrieb und die Optimierung der Cloud-Infrastruktur in AWS, Google Cloud und Azure.",
                "Implementierung von Automatisierungslösungen zur Verbesserung der Effizienz und Zuverlässigkeit der Cloud-Umgebungen.",
          ],
      },
      {
            title: "Bachelorstudent IT Infrastruktur",
            company: "ALDI International Services GmbH & Co. oHG",
            dateRange: "05/2016 - 09/2019",
          bullets: [
              "Automatisierung und Optnmierung von Bereitstellungsprozessen für virtuelle Maschinen.",
              "Planung und Bereitstellung von IT-Infrastrukturkomponenten.",
          ],
      },
      {
          title: "Freiberuflicher Dozent für Einführung in die Informatik",
          company: "Frankfurt School of Finance & Management",
          dateRange: "10/2022 - Heute",
          bullets: [
              "Konzeption und Durchführung von Vorlesungen und Übungen im Bereich Einführung in die Informatik für Bachelor-Studierende.",
              "Vermittlung von Grundlagen In Excel und Programmierung in Python.",
          ],
      }
  ],
  education: [
      {
          school: "AWS Training and Certification",
          degree: "AWS Certified Solutions Architect – Professional",
          dateRange: "2025",
          achievements: [ ],
      },
      {
        school: "AWS Training and Certification",
        degree: "AWS Certified Solutions Architect – Associate",
        dateRange: "2023",
        achievements: [ ],
      },
    {
      school: "Duale Hochschule Baden-Württemberg",
      degree: "Wirtschaftsinformatik B.Sc. Schwerpunkt Softwareentwicklung",
      dateRange: "2016 - 2019",
      achievements: [ ],
    },
      {
          school: "IHK Mannheim",
          degree: "Ausbildereignungsprüfung",
          dateRange: "2018",
          achievements: [ ],
      },
    {
        school: "Emschertal Berufskolleg Stadt Herne",
        degree: "Informationstechnischer Assistent",
        dateRange: "2013 - 2016",
        achievements: [ ],
    }
  ],
menuItems: {
  about: {
      label: "Über mich",
        href: "#about",
  },
    skills: {
      label: "Fähigkeiten",
        href: "#skills",
    },
    projects: {
        label: "Projekte",
            href: "#projects",
    },
    experience: {
        label: "Erfahrung",
            href: "#experience",
    },
    education: {
        label: "Ausbildung",
            href: "#education",
    }
},
};
