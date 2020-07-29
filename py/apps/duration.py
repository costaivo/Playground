from duration import (to_timedelta,to_tuple)

time = '1:23:45'

seconds = to_seconds(time) # 5025
td = to_timedelta(time) # timedelta(hours=1, minutes=23, seconds=45)
tuple_ = to_tuple(time) # (1, 23, 45,)
