package models

import (
	"time"

	"github.com/google/uuid"
)

type OrganizationRole string

const (
	OrgOwner          OrganizationRole = "OWNER"
	OrgAdmin          OrganizationRole = "ADMIN"
	OrgProjectManager OrganizationRole = "PROJECT_MANAGER"
	OrgMember         OrganizationRole = "MEMBER"
	OrgViewer         OrganizationRole = "VIEWER"
)

type OrganizationMember struct {
	ID             uuid.UUID        `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID        `gorm:"type:uuid;index;not null"`
	UserID         uint             `gorm:"index;not null"`
	Role           OrganizationRole `gorm:"type:varchar(30);not null"`

	CreatedAt time.Time
}
