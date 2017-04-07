<?php

namespace IPMEDT5A\Files;

use Maatwebsite\Excel\Files\ExcelFile;

/**
 * Class ShoesListImport
 * @package IPMEDT5A\Files
 */
class ProductsListImport extends ExcelFile
{

    /**
     * Get file
     *
     * @return string
     */
    public function getFile()
    {
        return storage_path('app') . '/producten.csv';
    }
}