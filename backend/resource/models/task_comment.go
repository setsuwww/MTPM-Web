package models

import (
	"time"

	"github.com/google/uuid"
)

type TaskComment struct {
	ID             uuid.UUID `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID `gorm:"type:uuid;index;not null"`
	TaskID         uuid.UUID `gorm:"type:uuid;index;not null"`
	UserID         uuid.UUID `gorm:"type:uuid;index;not null"`

	Message string `gorm:"type:text;not null"`

	CreatedAt time.Time
}
