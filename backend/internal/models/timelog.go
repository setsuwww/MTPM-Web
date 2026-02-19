package models

import "time"

type TimeLog struct {
	ID     uint `gorm:"primaryKey"`
	TaskID uint
	UserID uint

	Hours   float64
	LogDate time.Time

	CreatedAt time.Time
}
