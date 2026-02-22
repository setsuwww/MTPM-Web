package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type ProjectStatus string

const (
	ProjectActive   ProjectStatus = "ACTIVE"
	ProjectArchived ProjectStatus = "ARCHIVED"
)

type Project struct {
	ID             uuid.UUID `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID `gorm:"type:uuid;index;not null"`

	Name        string        `gorm:"type:varchar(150);not null"`
	Description string        `gorm:"type:text"`
	Status      ProjectStatus `gorm:"type:varchar(20);default:'ACTIVE'"`

	StartDate *time.Time
	EndDate   *time.Time

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
