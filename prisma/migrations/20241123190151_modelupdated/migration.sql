/*
  Warnings:

  - You are about to drop the `ShortUrl` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ShortUrl";

-- CreateTable
CREATE TABLE "shorturl" (
    "id" TEXT NOT NULL,
    "longUrl" TEXT NOT NULL,
    "uniqueId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "shorturl_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shorturl_longUrl_key" ON "shorturl"("longUrl");

-- CreateIndex
CREATE UNIQUE INDEX "shorturl_uniqueId_key" ON "shorturl"("uniqueId");
