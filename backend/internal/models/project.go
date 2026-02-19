package models

import "time"

type Project struct {
	ID       uint `gorm:"primaryKey"`
	Name     string
	ClientID uint
	Client   Client
	Status   string // DRAFT, ACTIVE, COMPLETED, CANCELLED

	ContractValue  float64 // Total deal value
	EstimatedHours float64
	EstimatedCost  float64

	StartDate time.Time
	EndDate   time.Time

	CreatedAt time.Time
	UpdatedAt time.Time
}
