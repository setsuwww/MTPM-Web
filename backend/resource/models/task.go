package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type TaskStatus string
type TaskPriority string

const (
	TaskTodo       TaskStatus = "TODO"
	TaskInProgress TaskStatus = "IN_PROGRESS"
	TaskDone       TaskStatus = "DONE"

	PriorityLow    TaskPriority = "LOW"
	PriorityMedium TaskPriority = "MEDIUM"
	PriorityHigh   TaskPriority = "HIGH"
)

type Task struct {
	ID uuid.UUID `gorm:"type:uuid;primaryKey"`

	OrganizationID uuid.UUID  `gorm:"type:uuid;not null;index:idx_org_project_status,priority:1"`
	ProjectID      uuid.UUID  `gorm:"type:uuid;not null;index:idx_org_project_status,priority:2"`
	Status         TaskStatus `gorm:"type:varchar(20);index:idx_org_project_status,priority:3"`

	Title       string       `gorm:"type:varchar(255);not null"`
	Description string       `gorm:"type:text"`
	Priority    TaskPriority `gorm:"type:varchar(20);index"`

	AssigneeID *uuid.UUID `gorm:"type:uuid;index"`
	DueDate    *time.Time

	Position int `gorm:"default:0"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
