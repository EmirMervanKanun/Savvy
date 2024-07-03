// CategoryController.js
import { iconMappings } from './iconMappings';

class Category {
  constructor(label, iconKey) {
    this.label = label;
    this.iconKey = iconKey;
  }

  getIcon() {
    return this.iconKey ? iconMappings[this.iconKey] : null;
  }
}

export default Category;
