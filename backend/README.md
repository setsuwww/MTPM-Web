# Backend - Multi-Tenant Project Management SaaS

Backend built using Golang with Clean Architecture and strict tenant isolation enforcement.

---

## Backend Responsibilities

- Authentication & Authorization
- Tenant resolution
- RBAC enforcement
- Business logic
- Data isolation
- Background jobs
- Export processing
- Audit logging

---

## Architecture Pattern

Clean Architecture:

- Router Layer
- Middleware Layer
- Controller Layer
- Service Layer
- Repository Layer
- Domain Entities

---

## Multi-Tenant Enforcement

Tenant resolved via:

- Subdomain
OR
- organization_id from JWT

All queries must include:

WHERE organization_id = ?

Composite index required:

(organization_id, id)
(organization_id, project_id)
(organization_id, status)

---

## Core Entities

### Organization
- id
- name
- created_at

### User
- id
- email
- password_hash
- created_at

### OrganizationMember
- id
- user_id
- organization_id
- role

### Project
- id
- organization_id
- name
- status

### Task
- id
- project_id
- organization_id
- title
- description
- status
- priority
- assignee_id
- due_date

### TaskComment
- id
- task_id
- user_id
- message

### ActivityLog
- id
- organization_id
- actor_id
- entity_type
- entity_id
- action
- timestamp

---

## RBAC Implementation

Middleware:
- Validate JWT
- Resolve organization
- Check role permission matrix

Policy-based access:
- Project-level check
- Task-level check

---

## ⚙ Core Features

### Task Operations
- Create
- Update
- Delete
- Bulk delete
- Reassign
- Change status

### Project Operations
- Create
- Update
- Archive
- Member assignment

### Organization Operations
- Invite member
- Change role
- Remove member

---

## 🧰 Helper Features

### Search
PostgreSQL Full Text Search

### Sort
Query param:
?sort=created_at&order=desc

### Filter
?status=todo
?priority=high
?assignee_id=123

### Bulk Operations
- delete_selected
- delete_all (scoped by filter)

### Export
- CSV generation (background job)
- Word (.docx) export
- File stored in object storage

---

## Background Jobs

Queue system handles:
- Email notifications
- Export processing
- Analytics aggregation
- Audit log compaction

---

## Performance Considerations

- Use pagination (limit/offset or cursor)
- Avoid N+1 queries
- Preload relations carefully
- Redis caching for permission matrix
- Rate limiting middleware

---

## Security Checklist

- Tenant isolation enforced in repository layer
- Input validation
- SQL injection prevention
- Password hashing (bcrypt/argon2)
- Role escalation prevention
- Audit logging enabled

---

Backend demonstrates:
- Multi-tenant isolation
- RBAC
- Clean architecture
- Scalable service design
- Enterprise-ready structure
