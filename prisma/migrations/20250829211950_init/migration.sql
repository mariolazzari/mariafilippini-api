-- CreateTable
CREATE TABLE "public"."Act" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "scene" TEXT NOT NULL,
    "actors" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "titleDia" TEXT,
    "remarks" TEXT,

    CONSTRAINT "Act_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Act_title_key" ON "public"."Act"("title");
