package models

import "time"

type Client struct {
	ID        uint `gorm:"primaryKey"`
	Name      string
	Email     string
	Company   string
	Projects  []Project `gorm:"foreignKey:ClientID"`
	CreatedAt time.Time
	UpdatedAt time.Time
}
