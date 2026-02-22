package models

import "time"

type PlatformRole string

const (
	PlatformSuperAdmin PlatformRole = "SUPER_ADMIN"
	PlatformUser       PlatformRole = "USER"
)

type User struct {
	ID       uint   `gorm:"primaryKey"`
	Name     string `gorm:"type:varchar(100);not null"`
	Email    string `gorm:"type:varchar(150);uniqueIndex;not null"`
	Password string `gorm:"type:text;not null" json:"-"`

	PlatformRole PlatformRole `gorm:"type:varchar(20);default:USER;index"`
	IsActive     bool         `gorm:"default:true;index"`

	CreatedAt time.Time
	UpdatedAt time.Time
}
