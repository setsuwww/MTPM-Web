package models

import (
	"time"

	"github.com/google/uuid"
)

type Attachment struct {
	ID             uuid.UUID `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID `gorm:"type:uuid;index;not null"`
	TaskID         uuid.UUID `gorm:"type:uuid;index;not null"`

	FileName string `gorm:"type:varchar(255)"`
	FileURL  string `gorm:"type:text"`
	FileSize int64

	UploadedBy uuid.UUID `gorm:"type:uuid;index"`

	CreatedAt time.Time
}
