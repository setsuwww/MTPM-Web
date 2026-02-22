package models

import (
	"time"

	"github.com/google/uuid"
)

type EntityType string
type ActionType string

const (
	EntityProject EntityType = "PROJECT"
	EntityTask    EntityType = "TASK"

	ActionCreate ActionType = "CREATE"
	ActionUpdate ActionType = "UPDATE"
	ActionDelete ActionType = "DELETE"
	ActionAssign ActionType = "ASSIGN"
)

type ActivityLog struct {
	ID             uuid.UUID `gorm:"type:uuid;primaryKey"`
	OrganizationID uuid.UUID `gorm:"type:uuid;index;not null"`

	ActorID    uuid.UUID  `gorm:"type:uuid;index"`
	EntityType EntityType `gorm:"type:varchar(30)"`
	EntityID   uuid.UUID  `gorm:"type:uuid"`
	Action     ActionType `gorm:"type:varchar(30)"`

	Metadata string `gorm:"type:jsonb"`

	CreatedAt time.Time
}
