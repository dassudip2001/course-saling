package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Category struct {
	gorm.Model

	Id        uuid.UUID `gorm:"type:char(36);primaryKey"`
	Name      string    `gorm:"type:varchar(128)"`
	Code      string    `gorm:"type:varchar(100)"`
	CreatedAt time.Time // Automatically managed by GORM for creation time
	UpdatedAt time.Time // Automatically managed by GORM for update time
}

func (category *Category) BeforeCreate(tx *gorm.DB) (err error) {
	category.Id = uuid.New()
	return nil
}
