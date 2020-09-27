import { AsyncStorage } from 'react-native';

const clearAppData = async function() {
    try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
    } catch (error) {
        console.error('Error clearing app data.');
    }
}

const storeData = async (k,v) => {
  try {
    await AsyncStorage.setItem(
      k,
      JSON.stringify(v)
    );
  } catch (error) {
    alert("error")
  }
};

const retrieveData = async (k) => {
  try {
    const value = await AsyncStorage.getItem(k);
    if (value !== null) {
      // We have data!!
      console.log(value);
      return JSON.parse(value);
    }
      } catch (error) {
    alert("error")
  }
}

  const deleteData = async (k) => {
    try {
      await AsyncStorage.removeItem(k)
      alert("deleted!")
    }
    catch (error) {
      alert("error")
    }
  }

  const updateData = async (k,v) => {
    try {
      await AsyncStorage.mergeItem(
        k,
        JSON.stringify(v)
      );
    } catch (error) {
      alert("error")
    }
  };

  const clearAll = async () => {
    try {
      AsyncStorage.clear()
    }
    catch (error){

    }
  }

  export {storeData, deleteData, retrieveData, updateData, clearAll, clearAppData}
