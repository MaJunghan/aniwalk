import {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

type TimerProps = {
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
};

function Timer({minutes, setMinutes, seconds, setSeconds}: TimerProps) {
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
      <Text style={{fontFamily: 'NotoSansKR-Bold', fontSize: hp(1.5), color: 'red'}}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </View>
  );
}

export default Timer;
