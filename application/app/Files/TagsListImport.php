<?php

namespace IPMEDT5A\Files;

use Maatwebsite\Excel\Files\ExcelFile;

/**
 * Class TagsListImport
 * @package IPMEDT5A\Files
 */
class TagsListImport extends ExcelFile
{
    /**
     * Get file
     *
     * @return string
     */
    public function getFile()
    {
        return storage_path('app') . '/tags.csv';
    }
}