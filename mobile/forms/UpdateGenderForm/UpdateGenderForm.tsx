import Container from '@/components/Container';
import CustomKeyboardView from '@/components/CustomKeyboardView';
import Radio from '@/components/Radio';
import SubmitButton from '@/components/SubmitButton';
import { useProfileStore } from '@/store/useProfileStore';
import { UpdateGenderFormProps } from '@/types/forms';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const UpdateGenderForm = ({
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue
}: UpdateGenderFormProps & { setFieldValue: (field: string, value: any) => void }) => {
    const { profile } = useProfileStore((state) => state)
    return (
        <CustomKeyboardView>
            <Container className={`flex-1 py-4 flex-col justify-stretch items-center`} style={{ gap: 30 }}>
                <Container className={`flex flex-col items-center`}>
                    <View className={`flex-row flex w-full justify-between items-center`}>
                        <View
                            className={`flex-row justify-start items-center`}
                            style={{ gap: wp(2) }}
                        >
                            <Fontisto name="transgender" size={24} color="#fff" />
                            <Text className={`text-white font-[800]`} style={{ fontSize: wp(4) }}>
                                Gender :
                            </Text>
                        </View>
                        <Radio
                            title={"male"}
                            press={() => setFieldValue("gender", "male")}
                            active={values.gender === "male"}
                        />
                        <Radio
                            title={"female"}
                            press={() => setFieldValue("gender", "female")}
                            active={values.gender === "female"}
                        />
                    </View>
                    {touched.gender && errors.gender && (
                        <View className={`flex items-start w-full`}>
                            <Text className={`text-red-600 `}>{errors.gender}</Text>
                        </View>
                    )}
                </Container>
                <SubmitButton disabled={values.gender === profile?.gender} value={"Save"} handleSubmit={handleSubmit} />
            </Container>
        </CustomKeyboardView>
    )
}

export default UpdateGenderForm
