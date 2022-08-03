/*
  Warnings:

  - You are about to drop the column `numberOfCylider` on the `Features` table. All the data in the column will be lost.
  - You are about to drop the column `decription` on the `Initial` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Features` DROP COLUMN `numberOfCylider`,
    ADD COLUMN `numberOfCylinders` INTEGER NULL DEFAULT -1;

-- AlterTable
ALTER TABLE `Initial` DROP COLUMN `decription`,
    ADD COLUMN `description` VARCHAR(2000) NULL DEFAULT '';
