package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type OrgRole string

const (
	RoleOwner  OrgRole = "OWNER"
	RoleAdmin  OrgRole = "ADMIN"
	RoleMember OrgRole = "MEMBER"
	RoleViewer OrgRole = "VIEWER"
)

type OrganizationMember struct {
	ID             uuid.UUID `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID `gorm:"type:uuid;index;not null"`
	UserID         uuid.UUID `gorm:"type:uuid;index;not null"`
	Role           OrgRole   `gorm:"type:varchar(20);not null"`

	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt gorm.DeletedAt `gorm:"index"`
}
