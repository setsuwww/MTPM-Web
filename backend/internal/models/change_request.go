package models

import "time"

type ChangeRequest struct {
	ID        uint `gorm:"primaryKey"`
	ProjectID uint

	Title       string
	Description string

	EstimatedHours float64
	AdditionalCost float64

	Status string // PENDING, APPROVED, REJECTED

	CreatedAt time.Time
}
