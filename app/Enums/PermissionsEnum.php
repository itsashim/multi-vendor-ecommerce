<?php

namespace App;

enum PermissionsEnum: string
{
    case ApproveVendors = 'ApproveVendors';
    case BuyProducts = 'BuyProducts';
    case SellVendors = 'SellProducts';
}
