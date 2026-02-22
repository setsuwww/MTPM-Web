package models

import (
	"time"

	"github.com/google/uuid"
)

type InvitationStatus string

const (
	InvitationPending  InvitationStatus = "PENDING"
	InvitationAccepted InvitationStatus = "ACCEPTED"
	InvitationExpired  InvitationStatus = "EXPIRED"
)

type Invitation struct {
	ID             uuid.UUID        `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID        `gorm:"type:uuid;index;not null"`
	Email          string           `gorm:"type:varchar(150);index"`
	Role           Role             `gorm:"type:varchar(20)"`
	Token          string           `gorm:"type:varchar(255);uniqueIndex"`
	Status         InvitationStatus `gorm:"type:varchar(20);default:'PENDING'"`

	ExpiresAt time.Time
	CreatedAt time.Time
}
