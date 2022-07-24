-- CreateTable
CREATE TABLE `UsedCar` (
    `id` VARCHAR(191) NOT NULL,
    `make` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `detail` VARCHAR(191) NULL,
    `year` INTEGER NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `engine_size` VARCHAR(191) NOT NULL,
    `transmission` VARCHAR(191) NOT NULL,
    `mileage` INTEGER NOT NULL,
    `doors` INTEGER NOT NULL DEFAULT 4,
    `fuel` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `price` INTEGER NOT NULL,
    `fprice` INTEGER NULL,
    `body_style` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
