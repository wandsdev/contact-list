import LocalStorage from './LocalStorage';

const keyName = 'contact';

export default {
  findAll: () => {
    const contact = LocalStorage.getItem(keyName, false);
    if (contact) {
      return JSON.parse(contact);
    }
    return [];
  },
  create: (newItem) => {
    let contact = LocalStorage.getItem(keyName, false);
    if (contact) {
      contact = LocalStorage.jsonParse(contact);
      contact.push(newItem);
      LocalStorage.setItem(keyName, contact);
    } else {
      LocalStorage.setItem(keyName, [newItem]);
    }
  },
  update(item) {
    const contact = LocalStorage.getItem(keyName);
    this.editItem(contact, item);
    LocalStorage.setItem(keyName, contact);
  },
  editItem(contact, item) {
    contact.forEach(element => {
      if (element.id === item.id) {
        element.name = item.name;
        element.contact = item.contact;
        element.email = item.email;
      }
    });
  },
  delete(id) {
    let contact = LocalStorage.getItem(keyName);
    contact = this.removeItem(contact, id);
    if (contact && contact.length) {
      LocalStorage.setItem(keyName, contact);
    } else {
      LocalStorage.removeItem(keyName);
    }
  },
  removeItem(contact, id) {
    return contact.filter(element => {
      return element.id !== id;
    });
  },
};
