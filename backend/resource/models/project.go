package models

import "time"

type Status string

const (
	PENDING   Status = "PENDING"
	APPROVED  Status = "APPROVED"
	REJECTED  Status = "REJECTED"
	CANCELED  Status = "CANCELED"
	COMPLETED Status = "COMPLETED"
)

type Project struct {
	ID       uint `gorm:"primaryKey"`
	Name     string
	ClientID uint
	Client   Client `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Status   Status `gorm:"type:varchar(20);default:'PENDING'"`

	Milestones []Milestone
	Tasks      []Task

	ContractValue  float64
	EstimatedHours float64
	EstimatedCost  float64

	StartDate time.Time
	EndDate   time.Time

	CreatedAt time.Time
	UpdatedAt time.Time
}
