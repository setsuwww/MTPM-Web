package models

import "time"

type Role string

const (
	SUPER_ADMIN     Role = "SUPER_ADMIN"
	COMPANY_ADMIN   Role = "COMPANY_ADMIN"
	PROJECT_MANAGER Role = "PROJECT_MANAGER"
	DEVELOPER       Role = "DEVELOPER"
	CLIENT          Role = "CLIENT"
)

type User struct {
	ID        uint `gorm:"primaryKey"`
	Name      string
	Email     string `gorm:"uniqueIndex"`
	Password  string
	Role      Role `gorm:"type:varchar(20);default:CLIENT"`
	IsActive  bool `gorm:"default:true"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
