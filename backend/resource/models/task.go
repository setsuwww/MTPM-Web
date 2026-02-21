package models

import "time"

type Task struct {
	ID          uint `gorm:"primaryKey"`
	ProjectID   uint
	SprintID    uint
	Title       string
	Description string

	EstimatedHours float64
	ActualHours    float64

	Status   string // TODO, IN_PROGRESS, DONE
	Priority string

	AssigneeID uint
	Assignee   User

	CreatedAt time.Time
	UpdatedAt time.Time
}
