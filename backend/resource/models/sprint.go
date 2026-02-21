package models

import "time"

type Sprint struct {
	ID        uint `gorm:"primaryKey"`
	ProjectID uint
	Name      string
	StartDate time.Time
	EndDate   time.Time
	Status    string
}
