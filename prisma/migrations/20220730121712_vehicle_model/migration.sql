-- CreateTable
CREATE TABLE `Initial` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `make` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `engine_size` VARCHAR(191) NOT NULL,
    `transmission` VARCHAR(191) NOT NULL,
    `registration` VARCHAR(191) NOT NULL,
    `previous_owners` INTEGER NOT NULL,
    `decription` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Features` (
    `id` VARCHAR(191) NOT NULL,
    `vehicle_type` VARCHAR(191) NOT NULL DEFAULT 'car',
    `body_style` VARCHAR(191) NOT NULL,
    `mileage` INTEGER NULL,
    `numberOfCylider` INTEGER NULL,
    `fuel` VARCHAR(191) NOT NULL,
    `yearOfModel` INTEGER NOT NULL,
    `doors` INTEGER NOT NULL,
    `steering` VARCHAR(191) NOT NULL,
    `features` VARCHAR(191) NULL,
    `vehicleId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Features_vehicleId_key`(`vehicleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Business` (
    `id` VARCHAR(191) NOT NULL,
    `price` INTEGER NULL,
    `finance_month` INTEGER NULL,
    `insurance_group` INTEGER NULL,
    `months12_tax` INTEGER NULL,
    `months6_tax` INTEGER NULL,
    `vehicleId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Business_vehicleId_key`(`vehicleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ImageGallery` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `vehicleId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Features` ADD CONSTRAINT `Features_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `Initial`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `Initial`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ImageGallery` ADD CONSTRAINT `ImageGallery_vehicleId_fkey` FOREIGN KEY (`vehicleId`) REFERENCES `Initial`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
