package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type ProjectMember struct {
	ID             uuid.UUID `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID `gorm:"type:uuid;index;not null"`
	ProjectID      uuid.UUID `gorm:"type:uuid;index;not null"`
	UserID         uuid.UUID `gorm:"type:uuid;index;not null"`

	CreatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
