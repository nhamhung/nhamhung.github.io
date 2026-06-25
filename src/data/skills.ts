import type { SkillCategory } from '../types/portfolio'

export const skills = [
  {
    category: 'Academic',
    skills: ['IELTS 8.0', 'ACT 35/36 (STEM)', 'SAT 800/800 (Chemistry)'],
  },
  {
    category: 'Professional',
    skills: [
      'Couchbase Certified Associate Architect',
      'Certified Kubernetes Application Developer',
      'GCP Cloud Engineering',
      'AWS Cloud Practitioner',
    ],
  },
  {
    category: 'Data Engineering',
    skills: ['GCP', 'Hadoop', 'Hive', 'Spark', 'Kafka', 'MySQL', 'MongoDB', 'Couchbase', 'Redis', 'dbt', 'Iceberg'],
  },
  {
    category: 'Data and ML',
    skills: ['SQL', 'Python', 'Java', 'Scala', 'Bash', 'Airflow', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
  },
  {
    category: 'DevOps and MLOps',
    skills: ['Linux', 'Jenkins', 'Ansible', 'Docker', 'Kubernetes', 'ELK', 'Prometheus', 'Grafana', 'MLflow'],
  },
] satisfies SkillCategory[]
