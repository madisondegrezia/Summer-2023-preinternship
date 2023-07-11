"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobApplication.init(
    {
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minSalary: DataTypes.INTEGER,
      maxSalary: {
        type: DataTypes.INTEGER,
        validate: {
          minSalaryLessThanMax(value) {
            if (this.minSalary && value && value < this.minSalary) {
              throw new Error(
                "Maximum salary cannot be less than minimum salary."
              );
            }
          },
        },
      },
      location: DataTypes.STRING,
      postDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true, // Ensures postDate is a valid date
          isPast(value) {
            if (value > new Date()) {
              throw new Error("Post date cannot be in the future.");
            }
          },
        },
      },
      jobPostUrl: DataTypes.STRING,
      applicationDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true, // Ensures applicationDate is a valid date
          isAfterPostDate(value) {
            if (this.postDate && value < this.postDate) {
              throw new Error(
                "Application date cannot be before the post date."
              );
            }
          },
        },
      },
      lastContactDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true, // Ensures lastContactDate is a valid date
          isPast(value) {
            if (value > new Date()) {
              throw new Error("Last contact date cannot be in the future.");
            }
          },
        },
      },
      companyContact: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        allowNull: false, // Requires status to be present
        defaultValue: 1,
        validate: {
          isInt: true, // Ensures status is an integer
          ifValidateStatus(value) {
            if(!(1 <= value && value <= 6)) {
              throw new Error("Invalid Status, must be between 1 and 6")
            }
          }
        },
      },
    },
    {
      sequelize,
      modelName: "JobApplication",
      tableName: "job_applications", // explicit snake cased table name
      underscored: true, // this option converts camelCased columns to snake_case in the DB
    }
  );
  return JobApplication;
};
