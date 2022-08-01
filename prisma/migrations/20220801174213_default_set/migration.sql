-- AlterTable
ALTER TABLE `Business` MODIFY `price` INTEGER NULL DEFAULT -1,
    MODIFY `finance_month` INTEGER NULL DEFAULT -1,
    MODIFY `insurance_group` INTEGER NULL DEFAULT -1,
    MODIFY `months12_tax` INTEGER NULL DEFAULT -1,
    MODIFY `months6_tax` INTEGER NULL DEFAULT -1;

-- AlterTable
ALTER TABLE `Features` MODIFY `mileage` INTEGER NULL DEFAULT -1,
    MODIFY `numberOfCylider` INTEGER NULL DEFAULT -1,
    MODIFY `features` VARCHAR(191) NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Initial` MODIFY `decription` VARCHAR(191) NULL DEFAULT '';
