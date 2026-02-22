package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Organization struct {
	ID       uuid.UUID `gorm:"type:uuid;primaryKey"`
	Name     string    `gorm:"type:varchar(150);not null"`
	Slug     string    `gorm:"type:varchar(150);uniqueIndex;not null"`
	IsActive bool      `gorm:"default:true"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
