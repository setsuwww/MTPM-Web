package models

import "time"

type Role string

const (
	SUPER_ADMIN     Role = "SUPER_ADMIN"
	ADMIN           Role = "ADMIN"
	PROJECT_MANAGER Role = "PROJECT_MANAGER"
	DEVELOPER       Role = "DEVELOPER"
	CLIENT          Role = "CLIENT"
)

type User struct {
	ID        uint   `gorm:"primaryKey"`
	Name      string `gorm:"type:varchar(100);not null"`
	Email     string `gorm:"type:varchar(150);uniqueIndex;not null"`
	Password  string `gorm:"type:text;not null" json:"-"`
	Role      Role   `gorm:"type:varchar(20);default:CLIENT;index;not null"`
	IsActive  bool   `gorm:"default:true;index"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
