import {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function Timer() {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (Number(seconds) > 0) {
        setSeconds(Number(seconds) - 1);
      }
      if (Number(seconds) === 0) {
        if (Number(minutes) === 0) {
          clearInterval(countdown);
        } else {
          setMinutes(Number(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <View>
      <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: hp(2), color: 'red'}}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </View>
  );
}

export default Timer;
