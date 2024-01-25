import { StyleSheet, Text, View } from 'react-native'
import React ,{useEffect}from 'react'

const employees = () => {
    const {employees, setEmployees} = useState([])
    useEffect(() => {
        const fetchEmployData = async () => {
            try{
                const response = await axios.getEmplo
            }
            catch(e){
                console.log("error fetching employee data",e)
            }
        }
    })
  return (
    <View>
      <Text>employees</Text>
    </View>
  )
}

export default employees

const styles = StyleSheet.create({})