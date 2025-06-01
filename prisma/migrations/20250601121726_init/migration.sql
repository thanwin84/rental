/*
  Warnings:

  - Made the column `securityDeposit` on table `property` required. This step will fail if there are existing NULL values in that column.
  - Made the column `applicationFee` on table `property` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `property` MODIFY `securityDeposit` DOUBLE NOT NULL,
    MODIFY `applicationFee` DOUBLE NOT NULL,
    MODIFY `isParkingIncluded` BOOLEAN NULL DEFAULT false;
