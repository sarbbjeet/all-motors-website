/*
  Warnings:

  - You are about to drop the column `numberOfCylinders` on the `Features` table. All the data in the column will be lost.
  - You are about to drop the column `steering` on the `Features` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Features` DROP COLUMN `numberOfCylinders`,
    DROP COLUMN `steering`;
