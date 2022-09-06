const mongoose = require('mongoose');

const RecommendationSchema = mongoose.Schema(
  {
    Recommendation: {
      type: String,
      required: false,
    },
    Seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seller',
      required: false,
    },
    Image: {
      type: String,
    },
    Target: {
      type: Number,
      required: false,
    },
    TargetVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    TargetPeriod: {
      type: String,
      required: false,
    },
    TargetPeriodVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    CurrentMarketPrice: {
      type: String,
      required: false,
    },
    CurrentMarketPriceVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    Sector: {
      type: String,
    },
    SectorVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    StopLoss: {
      type: String,
      default: null,
    },
    MarketCaptilization: {
      type: String,
    },
    MarketCaptilizationVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    Category: {
      type: String,
    },
    CategoryVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: false,
    },
    sub_category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'SubCategory',
      required: false,
    },
    Sell: {
      type: Number,
    },
    SellVisible: {
      type: Boolean,
      required: false,
      default: false,
    },

    Buy: {
      type: Number,
    },
    BuyVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    subCategoryValue: {
      type: Number,
    },
    subCategoryValueVisible: {
      type: Boolean,
      required: false,
      default: false,
    },
    price: {
      type: Number,
    },
    ContentIncludes: {
      type: String,
      default: null,
    },
    isDetailedReport: {
      type: Boolean,
      required: false,
      default: false,
    },
    Expiry: {
      type: String,
      default: null,
    },
    DetailedReport: {
      ValuationRatioData: {
        PE: {
          type: String,
        },
        PBE: {
          type: String,
        },
        EBITDA: {
          type: String,
        },
        RoE: {
          type: String,
        },
        EPS: {
          type: String,
        },
        DividendYield: {
          type: String,
        },
      },
      PricePerformance: {
        one_week: {
          type: String,
        },
        one_month: {
          type: String,
        },
        three_months: {
          type: String,
        },
        one_year: {
          type: String,
        },
        three_years: {
          type: String,
        },
      },
      media: {
        type: String,
      },
      Price: {
        type: Number,
      },
      Includes: {
        type: String,
        default: null,
      },
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Recommendation', RecommendationSchema);
