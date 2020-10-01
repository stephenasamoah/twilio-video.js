import { Track } from './Track';
import { TrackPublication } from './TrackPublication';

export class RemoteTrackPublication extends TrackPublication {
  isSubscribed: boolean;
  isTrackEnabled: boolean;
  kind: Track.Kind;
  publishPriority: Track.Priority;
  track: RemoteTrack | null;

  on(event: 'publishPriorityChanged', listener: (priority: Track.Priority) => void): this;
  on(event: 'subscribed', listener: (track: RemoteTrack) => void): this;
  on(event: 'subscriptionFailed', listener: (error: TwilioError) => void): this;
  on(event: 'trackDisabled', listener: () => void): this;
  on(event: 'trackEnabled', listener: () => void): this;
  on(event: 'trackSwitchedOff', listener: (track: RemoteTrack) => void): this;
  on(event: 'trackSwitchedOn', listener: (track: RemoteTrack) => void): this;
  on(event: 'unsubscribed', listener: (track: RemoteTrack) => void): this;
}
